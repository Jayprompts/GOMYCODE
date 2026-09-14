# API Checkpoint — UserSphere Directory

A modern React application consuming the **JSONPlaceholder** REST API using **Axios** and React Hooks (`useEffect`, `useState`), following the GoMyCode curriculum guidelines.

---

## 🎯 Objectives Completed

1. **Project Created**:
   - Organized in the dedicated directory `API Checkpoint/` with standard Create React App structure.
2. **`UserList.js` Component**:
   - Created in `src/UserList.js`.
3. **Axios Integration**:
   - Installed `axios` and imported it to perform HTTP GET requests.
4. **JSONPlaceholder API**:
   - Consumes `https://jsonplaceholder.typicode.com/users` inside the `useEffect` hook.
5. **State Management (`useState`)**:
   - Stores the fetched API data in the `listOfUSer` state.
6. **Data Mapping**:
   - Maps through `listOfUSer` to render rich, interactive user profile cards.
7. **Custom Styling & UX**:
   - Sleek dark glassmorphic UI with gradient avatars, company info, contact links (`mailto:`, `tel:`, external website), real-time search filter, loading skeleton, and error recovery.

---

## 🗂️ Project Structure

```text
API Checkpoint/
├── public/
│   ├── index.html            # Title, Plus Jakarta Sans typography, metadata
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── UserList.js           # Main checkpoint component (Axios + useEffect + listOfUSer)
│   ├── App.js                # App header, layout, and UserList integration
│   ├── App.test.js           # Automated Jest test suite
│   ├── index.css             # Glassmorphic dark styling and responsive grid
│   └── index.js              # React DOM entry point
├── package.json
└── README.md
```

---

## ⚡ Technical Workflow

```text
[ User mounts UserList component ]
                │
                ▼
[ useEffect hook triggers on mount ]
                │
                ▼
[ axios.get('https://jsonplaceholder.typicode.com/users') ]
                │
                ▼
[ HTTP 200 OK: response.data ]
                │
                ▼
[ setListOfUSer(response.data) ]
                │
                ▼
[ listOfUSer.map((user) => <UserCard key={user.id} />) ]
```

---

## 🚀 How to Run

1. Navigate to the project directory:
   ```bash
   cd "API Checkpoint"
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run automated tests:
   ```bash
   npm test -- --watchAll=false
   ```

5. Build for production:
   ```bash
   npm run build
   ```
