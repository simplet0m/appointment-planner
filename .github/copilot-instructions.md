This repo is a small Create React App project (see package.json) for managing contacts and appointments.
The instructions below are focused on what an AI or a new contributor needs to know to be immediately productive in this codebase.

Quick facts
- Entry point: `src/index.js` → `src/App.js` (RouterProvider).
- Routing constants: `src/components/root/Root.js` (exported `ROUTES`).
- Pages (containers): `src/containers/contactsPage/ContactsPage.js` and `src/containers/appointmentsPage/AppointmentsPage.js`.
- Reusable UI components: `src/components/*` (e.g., `ContactForm`, `AppointmentForm`, `ContactPicker`, `Tile`, `TileList`).

Dev commands
- Install & run: `npm install` then `npm start` (CRA dev server on :3000).
- Tests: `npm test` (CRA test runner).
- Build: `npm run build`.

Important patterns & gotchas (concrete, discoverable)
- Props / signature conventions: components are written as functional components that expect a single props object and typically destructure it. Example (bug in repo):
  - Wrong: `export const ContactsPage = (contacts, addContact) => { ... }` // this treats the whole props object incorrectly.
  - Correct: `export const ContactsPage = ({ contacts, addContact }) => { ... }`

- State & handlers: Parent (`src/App.js`) keeps `contacts` and `appointments` in top-level state and passes handlers down. Note that `App.js` currently defines addContact/addAppointment with individual arg signatures (name, phone, email) but some containers call them with a single object. Align the signatures when changing code.

- Tile/TileList: UI tiles render objects with `name` and other fields. Both `TileList` and `Tile` currently take wrong parameter shapes. Fix pattern:
  - TileList: `export const TileList = ({ contacts }) => contacts.map((c, i) => <Tile key={i} {...c} />)`
  - Tile: `export const Tile = ({ name, description }) => ...`

- Forms: `ContactForm` is a controlled form using useState in the page/container. It uses a UK phone regex pattern — keep validations in the form and avoid duplicating submit calls. Prefer `button type="submit"` and rely on `onSubmit` on the form.

- AppointmentForm helper: `getTodayString()` computes the date `YYYY-MM-DD` to be used as minimum date for inputs.

Where to look first when asked for changes
- Routing / navigation changes: `src/App.js` and `src/components/root/Root.js`.
- UI items / tiles: `src/components/tile/Tile.js` and `src/components/tileList/TileList.js`.
- Forms and validations: `src/components/contactForm/ContactForm.js` and `src/components/appointmentForm/AppointmentForm.js`.

Testing and verification
- Run `npm start` and exercise the UI (Contacts and Appointments) in the browser. Watch console/logs for prop-type/runtime errors.

If you add or change a public API (a handler prop) make sure to update call sites in `src/App.js` and the consumer containers to match the parameter shape.

If anything here is unclear or you want the instructions to be extended to include coding style rules, unit test examples, or bug lists to prioritize, say so and I'll iterate.
