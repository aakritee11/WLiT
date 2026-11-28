# Quickstart: Campus Event & Club Hub

## Prerequisites

- A modern web browser with JavaScript and localStorage enabled.
- A static HTTP server to open the project on a stable browser origin. No application packages are required. If Python 3 is available, run this from the repository root:

  ```text
  python -m http.server 8000
  ```

- Open `http://localhost:8000/` in the browser. The app consists of root-level `index.html`, `styles.css`, and `app.js`.

## Validation scenarios

1. **Initial event list**: Clear the site's localStorage and reload. Confirm the sample events are shown as cards with title, description, category, date/time, and location, ordered soonest first.
2. **Category filtering**: Select Workshop, Social, and Sports in turn. Confirm each view contains only matching upcoming events. Select All events and confirm the full upcoming list returns.
3. **Empty state**: Select a category with no upcoming events (or temporarily use a seed list without that category). Confirm a clear empty-state message appears and All events restores the list.
4. **Required-field validation**: Submit with a required field blank. Confirm the event is not added and the missing field is identified.
5. **Past-date validation**: Submit an otherwise complete event with a past date/time. Confirm the event is rejected with corrective feedback.
6. **Successful submission**: Submit a complete event with a future date/time. Confirm success feedback, correct card details, and chronological placement. Filter by its category and confirm it remains visible there.
7. **Reload persistence**: Reload after a successful submission. Confirm the event remains in the same browser's upcoming list.
8. **Storage recovery**: With browser developer tools, replace the saved event-list value with invalid JSON or disable site storage, then reload. Confirm the app reports a storage issue and remains usable with seed events; confirm it does not falsely report a failed save as successful.

## Related design

- See [data-model.md](./data-model.md) for event fields, validation, and persistence behavior.
- See [spec.md](./spec.md) for user stories, acceptance scenarios, and measurable outcomes.
