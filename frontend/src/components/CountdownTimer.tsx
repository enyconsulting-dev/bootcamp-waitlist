import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EMPTY_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const TIME_UNITS: Array<keyof TimeLeft> = ["days", "hours", "minutes", "seconds"];

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY_TIME);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const doorsOpenDateStr = import.meta.env.VITE_DOORS_OPEN_DATE?.trim() || "2026-09-01T00:00:00Z";

    const targetDate = new Date(doorsOpenDateStr);

    // Validate date
    if (Number.isNaN(targetDate.getTime())) {
      setError(`Invalid date format for VITE_DOORS_OPEN_DATE: "${doorsOpenDateStr}". Expected ISO 8601 format (e.g., "2026-09-01T00:00:00Z")`);
      return;
    }

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft(EMPTY_TIME);
        setError(null); // Clear any previous error when countdown ends
        return;
      }

      // Calculate time left in a way that's clear to TypeScript
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
      setError(null); // Clear error on successful update
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="countdown-timer error">
        <div>Configuration Error:</div>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="countdown-timer" aria-label="Time until the bootcamp opens">
      {TIME_UNITS.map((unit) => (
        <div className="countdown-unit" key={unit}>
          <span className="countdown-value">{String(timeLeft[unit]).padStart(2, "0")}</span>
          <span className="countdown-label">{unit}</span>
        </div>
      ))}
    </div>
  );
}