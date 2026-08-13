-- /home/obed/Documents/bootcamp-waitlist/backend/migrations/001_create_waitlist_table.sql
-- Run this in the Supabase SQL Editor (Project -> SQL Editor -> New query) once.

create extension if not exists "pgcrypto";

create table if not exists waitlist_signups (
    id uuid primary key default gen_random_uuid(),
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    email varchar(255) not null unique,
    country varchar(100) not null,
    whatsapp_number varchar(30) not null,
    currency_tag varchar(20) not null check (currency_tag in ('ngn-audience', 'usd-audience')),
    crm_tag varchar(50) not null default 'offer-bootcamp-waitlist',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_waitlist_signups_created_at on waitlist_signups (created_at desc);
create index if not exists idx_waitlist_signups_email on waitlist_signups (lower(email));

-- keep updated_at fresh on every row update
create or replace function set_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

drop trigger if exists trg_waitlist_signups_updated_at on waitlist_signups;
create trigger trg_waitlist_signups_updated_at
    before update on waitlist_signups
    for each row execute function set_updated_at();

-- Row Level Security: the backend connects using the direct Postgres connection
-- string (not the anon/public API key), so it bypasses RLS as the postgres role.
-- We still enable RLS + a locked-down policy set as defense in depth, in case
-- anyone later exposes this table via Supabase's PostgREST API too.
alter table waitlist_signups enable row level security;

drop policy if exists "no public access" on waitlist_signups;
create policy "no public access"
    on waitlist_signups
    for all
    using (false)
    with check (false);
