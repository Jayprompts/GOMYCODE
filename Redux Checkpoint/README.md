# Redux Checkpoint — TaskPulse ToDo Application

A modern, responsive ToDo application built with **React** and **Redux** for global state management, following the GoMyCode curriculum guidelines.

---

## 🎯 Objectives Completed

1. **Global State Management**:
   - Centralized Redux store manages tasks list and filter criteria.
   - Standard Redux architecture with explicit `actionTypes`, `actions` creators, pure `reducer`, and `store`.
   - Out-of-the-box support for the **Redux DevTools Extension**.

2. **Components Built**:
   - **`AddTask`** (also aliased as **`Addtask`**): Input form with live validation and keyboard submit support to dispatch `ADD_TASK`.
   - **`ListTask`**: Container rendering the filtered list of `Task` components, filter switch pills (`All`, `Done`, `Not Done`), active count badges, and empty states.
   - **`Task`**: Represents each task item with completion toggle checkbox, inline edit mode (Save/Cancel), status pills, and deletion.

3. **Task Attributes**:
   - Every task has:
     - `id`: Unique identifier (string / timestamp)
     - `description`: Text of the task
     - `isDone`: Boolean status indicating whether the task is completed

4. **User Interactions**:
   - ✅ Add a new ToDo item.
   - ✅ Filter tasks by **Done**, **Not Done**, and **All**.
   - ✅ Edit an existing task's description inline.
   - ✅ Toggle completion status (`isDone`) with instant visual feedback (checkbox animation, strikethrough, status badge).
   - ✅ Real-time statistics counter (Total, Completed, Pending, and progress bar).

---

## 🗂️ Project Structure

```text
Redux Checkpoint/
├── public/
│   ├── index.html            # HTML template with Google Fonts & metadata
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── redux/
│   │   ├── actionTypes.js    # ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS, DELETE_TASK
│   │   ├── actions.js        # Redux action creators
│   │   ├── reducer.js        # Pure reducer handling state transitions
│   │   └── store.js          # Configured Redux store with DevTools support
│   ├── components/
│   │   ├── AddTask.js        # Add task input form component
│   │   ├── Addtask.js        # Re-export alias for case-insensitive imports
│   │   ├── ListTask.js       # Filter controls and Task mapping
│   │   └── Task.js           # Single task item with toggle, edit, and delete
│   ├── App.js                # App header, statistics, and main layout
│   ├── index.css             # Glassmorphic dark theme stylesheet
│   └── index.js              # React entry point wrapped with <Provider store={store}>
├── package.json
└── README.md
```

---

## ⚡ Redux Flow Overview

```text
[ User Interaction ]
        │
        ▼
[ Action Creator ] (e.g. addTask('Learn Redux'))
        │
        ▼
  [ Dispatch ] (dispatch({ type: ADD_TASK, payload: { id, description, isDone } }))
        │
        ▼
   [ Reducer ] (Pure function returning new immutable state)
        │
        ▼
 [ Redux Store ] (Updated global state)
        │
        ▼
[ React Components ] (Re-render via useSelector hooks)
```

---

## 🚀 How to Run

1. Navigate to the project directory:
   ```bash
   cd "Redux Checkpoint"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. To build for production:
   ```bash
   npm run build
   ```
