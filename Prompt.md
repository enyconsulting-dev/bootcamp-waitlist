## Critical Instruction: Replace the Entire Existing UI Content

The previous implementation did not fully replace all existing UI content with the content from the source of truth.

This task is therefore a **complete UI content and structure replacement**, not a partial update.

### Source of Truth

Use the following file as the primary implementation reference:

`/home/obed/Documents/bootcamp-waitlist/Readit.md`

The content of `Readit.md` is the same as:

`ConsultingOfferBootcamp_Waitlistv3.docx`

Therefore, treat `Readit.md` and `ConsultingOfferBootcamp_Waitlistv3.docx` as the same source of truth.

For implementation purposes, read and use:

`/home/obed/Documents/bootcamp-waitlist/Readit.md`

## Primary Objective

Replace the **entire existing frontend UI content** with the content, messaging, structure, sections, cards, headings, descriptions, CTAs, buttons, labels, and user-facing information defined in the source of truth.

Do not perform a partial update.

Perform a complete audit of the existing frontend UI and compare every visible section against `Readit.md`.

### What Must Be Replaced

Review and replace, where applicable:

* All headings
* All subheadings
* All paragraphs
* All descriptions
* All cards
* Card titles
* Card descriptions
* Benefits
* Features
* Lists
* Steps
* Sections
* Section ordering
* Calls to action
* Button labels
* Form labels
* Form helper text
* Placeholder text
* Badges
* Testimonials or social proof
* Pricing-related UI
* Footer text
* Navigation text
* Any other user-facing text or UI content

If an existing UI card, section, component, or piece of text represents old content, replace it with the corresponding content and structure from `Readit.md`.

Do not leave old UI content simply because the component already exists.

## Complete Replacement Rule

The final frontend should represent the offering described in `Readit.md`, not a mixture of the old UI and the new content.

After implementation:

* No old user-facing content should remain unless that exact content is also required by the source of truth.
* No existing card or section should remain with outdated content.
* Do not selectively update only obvious text.
* Inspect all pages and components that contribute to the rendered UI.
* Replace existing UI sections with the correct sections from the source of truth where necessary.
* Add, remove, reorder, or restructure frontend UI components where required to accurately reflect the source content.

## Preserve Existing Functionality

This is a frontend presentation and content replacement.

Do not unnecessarily modify:

* Backend code
* Database structure
* API endpoints
* API contracts
* Existing business logic
* Form submission behavior
* Validation
* State management
* Authentication
* Existing integrations
* Error handling

Maintain the existing geolocation/location-detection logic that determines and renders the appropriate price or currency for the user.

The pricing presentation may change to match the new UI, but the underlying location-based pricing behavior must continue to work.

## Design Rules

Maintain the existing:

* Brand colors
* Color palette
* General visual identity

You may modify:

* Layout
* Section structure
* Card structure
* Component arrangement
* Spacing
* Typography
* Button presentation
* Content hierarchy

These changes should be made only where necessary to accurately implement the source of truth.

## Required Implementation Process

Follow this process:

### Step 1: Read the Source

Read the entire file:

`/home/obed/Documents/bootcamp-waitlist/Readit.md`

Do not begin implementation after reading only part of the file.

### Step 2: Audit the Existing UI

Inspect the entire existing frontend and identify:

* Every page involved
* Every visible section
* Every reusable UI component
* Every card
* Every piece of user-facing text

### Step 3: Compare

Compare the existing rendered UI against `Readit.md`.

Identify:

* Content that must be replaced
* Sections that must be removed
* Sections that must be added
* Sections that must be reordered
* Existing components that can be reused with new content
* Components that require restructuring

### Step 4: Implement

Replace the existing UI so that it accurately represents the complete content and structure of `Readit.md`.

Do not stop after updating only the hero section or the most obvious sections.

Continue until all relevant user-facing UI has been reviewed and updated.

### Step 5: Final Audit

Before considering the task complete, perform a final comparison between:

1. The complete contents of `Readit.md`
2. The final rendered frontend UI

Verify that the UI is not a mixture of old and new content.

## API Modification Rule

Do not modify the API or backend automatically.

If the new UI can work with the existing API and data structure, preserve them unchanged.

If you discover that an API modification is genuinely required, do not make the change immediately.

Instead, report:

1. The specific UI requirement that cannot be supported.
2. The existing API limitation.
3. The smallest possible API modification required.
4. Whether there is a frontend-only alternative.

## Completion Criteria

The task is complete only when:

* The entire `Readit.md` file has been reviewed.
* All relevant existing UI content has been audited.
* Old cards and sections have been replaced where necessary.
* All user-facing text has been checked against the source of truth.
* The final UI accurately reflects the content and structure of `Readit.md`.
* The UI does not contain a mixture of outdated and new content.
* Existing functionality continues to work.
* Geolocation-based pricing continues to work.
* No unnecessary backend or API modifications were made.
* The application builds successfully without new errors.

## Final Report

When finished, provide:

1. **Files modified**
2. **Sections/components replaced**
3. **Any sections removed**
4. **Any sections added**
5. **Confirmation that the entire UI was audited against `Readit.md`**
6. **Confirmation of whether any old UI content remains and why**
7. **Confirmation that existing functionality was preserved**
8. **Whether an API modification is required**

Do not describe the task as complete until the final UI has been compared against the complete source of truth.
