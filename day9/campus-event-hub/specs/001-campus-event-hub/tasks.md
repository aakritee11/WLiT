# Tasks: Campus Event & Club Hub

**Input**: Design documents from `specs/001-campus-event-hub/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`

**Tests**: No automated test tasks are included; the feature specification does not request TDD or a test suite. Manual validation is covered by `quickstart.md`.

**Organization**: Tasks are grouped by user story and ordered by priority. The Setup and Foundational phases have no standalone tasks because this static app has no dependencies, backend, or shared infrastructure to initialize.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because files and prerequisites do not overlap.
- **[Story]**: User-story label for story-phase tasks.
- Every task names the exact application or documentation file(s) to change.

## Phase 1: Setup

**Purpose**: Project initialization. No standalone setup task is needed because no packages or configuration are required; T001 in the User Story 1 phase creates the static page shell.

## Phase 2: Foundational

**Purpose**: Shared blocking infrastructure.

No separate foundational work is required for this dependency-free, browser-only MVP.

---

## Phase 3: User Story 1 - Browse Upcoming Events (Priority: P1) - MVP

**Goal**: Students can browse upcoming campus events presented as cards.

**Independent Test**: Open the page and verify that each upcoming event appears as a card with its details, in chronological order; verify the empty state when there are no upcoming events.

### Implementation for User Story 1

- [x] T001 [US1] Create a semantic static page shell with exactly three placeholder event cards and a responsive card layout in `index.html` and `styles.css`; show title, category, description, date and time, and location without JavaScript behavior.
- [ ] T002 [US1] Define seed events and render upcoming cards in `app.js`, including chronological ordering and the no-events empty state; use `data-model.md` as the canonical definition for `Event.id`, `Event.title`, `Event.description`, `Event.category`, `Event.dateTime`, and `Event.location`.

**Checkpoint**: The page can show upcoming events and an empty state without relying on filtering or event submission.

---

## Phase 4: User Story 2 - Filter Events by Category (Priority: P2)

**Goal**: Students can narrow upcoming events to Workshop, Social, or Sports and restore all events.

**Independent Test**: Select each supported category and verify only matching upcoming events appear; select All events and verify the full upcoming list returns; verify an empty state for a category without events.

### Implementation for User Story 2

- [ ] T003 [US2] Add accessible Workshop, Social, Sports, and All events filter controls to `index.html` and style their selected and unselected states in `styles.css`.
- [ ] T004 [US2] Implement category selection and filtered-list rendering in `app.js`; keep the underlying event collection unchanged and show a category-specific empty state when there are no matches.

**Checkpoint**: Category filtering works against the upcoming events without changing stored event data.

---

## Phase 5: User Story 3 - Submit a New Event (Priority: P3)

**Goal**: Students can submit a valid future event and find it in the event list.

**Independent Test**: Submit an event with all required details, verify success feedback and chronological placement, then reload in the same browser and verify the event remains.

### Implementation for User Story 3

- [ ] T005 [US3] Add a labeled event-submission form with title, description, category, date/time, and location controls to `index.html`; style the form and its validation/status messages in `styles.css`.
- [ ] T006 [US3] Implement form validation, future-date checking, event creation, and success or corrective feedback in `app.js`; follow `data-model.md` for `Event.title`, `Event.description`, `Event.category`, `Event.dateTime`, and `Event.location`.
- [ ] T007 [US3] Load and save the event collection in browser localStorage from `app.js`, using the `data-model.md` definitions for `Event.id`, `Event.title`, `Event.description`, `Event.category`, `Event.dateTime`, and `Event.location`; seed only when no saved collection exists, and report invalid or unavailable storage without claiming an unsuccessful save succeeded.

**Checkpoint**: Valid submissions appear in the list and persist after reload in the same browser; invalid submissions are rejected with feedback.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Verify the complete experience against the feature's manual acceptance scenarios.

- [ ] T008 Validate the complete browse, filter, submission, persistence, and recovery flows from `quickstart.md`; fix any issues in `index.html`, `styles.css`, or `app.js`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No standalone setup task is needed; T001 in User Story 1 creates the static page shell.
- **Foundational (Phase 2)**: No separate blocking task is needed.
- **User Story 1 (Phase 3)**: Starts with T001; T002 depends on T001's page structure.
- **User Story 2 (Phase 4)**: Depends on the event list from User Story 1; T004 depends on T003's controls.
- **User Story 3 (Phase 5)**: Depends on the event list from User Story 1; T006 depends on T005's form; T007 depends on T006's validated submission flow.
- **Polish (Phase 6)**: T008 depends on all desired stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories.
- **User Story 2 (P2)**: Depends on User Story 1's event list.
- **User Story 3 (P3)**: Depends on User Story 1's event list; does not depend on User Story 2.

### Parallel Opportunities

No tasks are marked `[P]`: each successive task relies on markup, styles, or behavior created by the preceding task, and the same three application files are shared across stories.

### Parallel Execution Examples

- **User Story 1**: No parallel tasks; complete T001 before T002.
- **User Story 2**: No parallel tasks; complete T003 before T004.
- **User Story 3**: No parallel tasks; complete T005, T006, and T007 in order.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete T001 to create the basic static page and three placeholder cards.
2. Complete T002 to render the upcoming event list from seed data.
3. Stop and validate the User Story 1 independent test before continuing.

### Incremental Delivery

1. Deliver User Story 1 as the browsing MVP.
2. Add User Story 2 filtering and validate it independently.
3. Add User Story 3 submission and browser-local persistence.
4. Run T008 against all scenarios in `quickstart.md`.

## Notes

- Every task follows the required checkbox, sequential ID, optional parallel marker, story label where applicable, and explicit file-path format.
- Model field constraints are referenced using `data-model.md` and the exact `Event.field` names in the implementing tasks.
- The application stays within `index.html`, `styles.css`, and `app.js`; no framework, package, database, login, or server-side code is introduced.
