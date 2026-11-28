# Data Model: Campus Event & Club Hub

## Event

Represents one campus activity shown in the upcoming event list.

| Field | Type | Required | Rules |
|---|---|---:|---|
| `id` | String | Yes | Unique within the event list; used to distinguish events when rendering and updating the list. |
| `title` | String | Yes | Must contain non-whitespace text. |
| `description` | String | Yes | Must contain non-whitespace text. |
| `category` | String | Yes | Exactly one of `Workshop`, `Social`, or `Sports`. |
| `dateTime` | String | Yes | Local date and time; must be later than the current time when submitted. |
| `location` | String | Yes | Must contain non-whitespace text. |

### Relationships

- The hub presents a collection of events. Each event belongs to exactly one category.
- Category filtering selects events from the same upcoming event collection; it does not change or remove stored events.

### State and persistence

- Seed events provide the initial collection when the browser has no saved event list.
- A valid submission is added to the collection, rendered in chronological order, and saved so it is available after a reload in the same browser and origin.
- Past events remain stored but are excluded from the upcoming list.
- No user, account, organizer profile, or server-side record is represented.

### Validation and recovery

- Reject submissions with a missing or whitespace-only required field, an unsupported category, or a date/time that is not in the future.
- Treat localStorage contents as untrusted input: verify the saved value is valid JSON and that each usable record has the required event fields and supported category before rendering it.
- If saved data is invalid or browser storage cannot be accessed, notify the user and retain access to seed events; do not show a success state for an event that could not be saved.
