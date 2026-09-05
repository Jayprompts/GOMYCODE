# React Hooks Checkpoint — CineStream Movie App

A modern, responsive movie explorer application built with **React** and **React Hooks** (`useState`, `useMemo`), styled with **React-Bootstrap** and custom cinematic CSS.

---

## 📌 Project Overview

This project satisfies all requirements for the **React Hooks Checkpoint**:
- **Components created**:
  - `MovieCard`: Renders movie poster, title, plot description, star rating, and badges.
  - `MovieList`: Renders the grid of movies with responsive columns and empty state handling.
  - `Filter`: Dual filter supporting real-time search by title and minimum rating (0 to 5 stars), with a quick reset button.
  - `AddMovie`: Modal form enabling users to add new movies with full validation.
- **Movie Attributes**:
  - `title` (string)
  - `description` (string)
  - `posterURL` (string)
  - `rating` (number from 1 to 5)
- **React Hooks Utilized**:
  - `useState`: Manages dynamic movie list, title search query, minimum rating filter value, and modal state.
  - `useMemo`: Memoizes the filtered movie array whenever movies, title filter, or rating filter change for optimal performance.

---

## 🗂️ Project Structure

```text
React Hooks Checkpoint/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AddMovie.js    # Modal form to add a movie
│   │   ├── Filter.js      # Title & rating filter component
│   │   ├── MovieCard.js   # Individual movie presentation card
│   │   └── MovieList.js   # Movie grid display
│   ├── App.js             # Root component with state & hooks logic
│   ├── index.css          # Global styling & animations
│   └── index.js           # React entry point
└── package.json
```

---

## 🚀 How to Run

1. Open your terminal in this folder:
   ```bash
   cd "React Hooks Checkpoint"
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
