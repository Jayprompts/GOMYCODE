# React Router Checkpoint — CineStream Movie Router

A rich, responsive movie web application built with **React**, **React Router v7** (`react-router-dom`), and **React-Bootstrap**.

---

## 🎯 Objectives Completed

1. **Movie Data Model**:
   - Each movie contains `id`, `title`, `description`, `posterURL`, `trailerURL` (embed link), and `rating`.
2. **Card Navigation**:
   - Clicking any movie card on the home page routes directly to `/movie/:id` via `useNavigate` / `react-router-dom`.
3. **Movie Details & Trailer Page**:
   - Renders a responsive 16:9 embedded YouTube video trailer (`<iframe>`), full movie synopsis, star rating display, and poster.
4. **Return Navigation**:
   - Dedicated "← Back to Home" button seamlessly returns to the home page (`/`).
5. **Add Movie with Trailer Support**:
   - The "+ Add Movie" modal allows entering a title, poster URL, trailer embed URL, rating, and description, automatically formatting YouTube links.

---

## 🗂️ Project Structure

```text
React Router Checkpoint/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── AddMovie.js      # Modal form supporting trailer URL
│   │   ├── Filter.js        # Title and minimum rating filter
│   │   ├── MovieCard.js     # Clickable card leading to /movie/:id
│   │   ├── MovieDetail.js   # Description and embedded trailer page
│   │   └── MovieList.js     # Grid displaying movies
│   ├── App.js               # Route configuration (/ and /movie/:id)
│   ├── index.css            # Dark cinema styling and animations
│   └── index.js             # BrowserRouter integration
└── package.json
```

---

## 🚦 Available Routes

| Route | View | Description |
|---|---|---|
| `/` | `Home` | Movie catalog, title & rating filters, and "+ Add Movie" modal |
| `/movie/:id` | `MovieDetail` | Dedicated page with embedded video trailer, full plot synopsis, and back button |
| `*` | `404 Fallback` | Not-found page with redirect button back to Home |

---

## 🚀 How to Run

1. Open your terminal in this folder:
   ```bash
   cd "React Router Checkpoint"
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build production bundle:
   ```bash
   npm run build
   ```
