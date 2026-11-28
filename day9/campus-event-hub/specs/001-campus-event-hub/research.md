# Research: Campus Event & Club Hub

## Browser-only structure

- **Decision**: Use the three root-level files `index.html`, `styles.css`, and `app.js`, with no framework, package, backend, or build step.
- **Rationale**: This is an explicit user constraint and is sufficient for the single-page browsing, filtering, and submission flows.
- **Alternatives considered**: A component framework or a server-rendered app would add dependencies and complexity without supporting any required MVP behavior.

## Event storage and initialization

- **Decision**: Define a small seed-event array in `app.js`; use the live in-memory array for rendering and interactions, and save/load that array as JSON in localStorage. Seed and persist initial events only when there is no saved event list.
- **Rationale**: This keeps mock data explicit in JavaScript while allowing new events to survive reloads in the same browser without a database.
- **Alternatives considered**: Keeping events only in memory would lose submissions on reload and conflict with the requested localStorage behavior. Using a remote service or database is outside the MVP constraints.

## Local persistence boundary

- **Decision**: Treat localStorage as browser- and origin-specific persistence; do not imply account-level, cross-device, or cross-browser sharing.
- **Rationale**: This matches the user requirement for localStorage without a login or database and sets clear expectations for students.
- **Alternatives considered**: Server synchronization would require infrastructure and user identity, both excluded by the request.

## Event validation and display

- **Decision**: Require a title, description, supported category, future date and time, and location. Render only upcoming events in ascending date/time order; category filtering applies to that upcoming list.
- **Rationale**: These fields and behaviors are stated or assumed by the feature specification and make each acceptance scenario verifiable.
- **Alternatives considered**: Allowing past events or optional core fields would weaken the meaning of “upcoming event” and make cards incomplete.

## Storage recovery

- **Decision**: Validate saved data before using it. If stored JSON cannot be read or parsed, show a clear recovery message and continue with seed data rather than failing to render the page.
- **Rationale**: Browser-local storage may be unavailable or contain invalid data; an informative fallback keeps browsing usable without silently claiming that prior submissions were retained.
- **Alternatives considered**: Failing the whole app on a storage error prevents users from browsing; silently treating an error as a successful save would be misleading.
