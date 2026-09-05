# ⚡ TaskFlow Studio — Smart AI-Ready Task Tracker

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Final Project Studio – Build & Deploy with AI**  
> A productivity and task management mini-app created with AI-assisted software architecture, modern glassmorphism aesthetics, real-time analytics, and zero external runtime dependencies.

---

## 🌟 Key Features

- **🎨 Modern Glassmorphism UI:** Built using CSS custom properties, backdrop blur filters, radiant gradients, and micro-interactions.
- **🌓 Seamless Theme Engine:** Smooth transitions between ambient Dark Mode and clean Light Mode, saved automatically in `localStorage`.
- **📊 Real-Time Analytics Dashboard:**
  - Dynamic counters for **Total Tasks**, **In Progress**, **Completed**, and **High Priority**.
  - Animated progress bar and productivity score that updates instantly as tasks are completed.
- **🏷️ Multi-Attribute Task Creation:**
  - Categorization: 💼 Work, 👤 Personal, 📚 Study, 🏃 Fitness, 💻 Code.
  - Priority levels with distinct visual indicators: 🔴 High, 🟡 Medium, 🟢 Low.
  - Due date tracker with automatic status tags (*Due Today*, *Tomorrow*, or *Overdue*).
- **🔍 Instant Search & Multi-Level Filtering:**
  - Real-time search query matching title and category names.
  - Filter tabs: **All**, **Active**, and **Completed**.
  - Dropdown filters for categories and sorting (Newest, Oldest, Priority, Due Date).
- **✏️ Modal Inline Editing:** Fast modal dialog for updating existing tasks without page reloads.
- **↩️ Toast Notifications with Undo:** Restores accidentally deleted tasks with a single click within 5 seconds.
- **🎉 Gamified Celebration:** Custom Canvas particle confetti triggers when all active tasks reach 100% completion.
- **⌨️ Keyboard Shortcuts:**
  - Press `/` to focus the task input.
  - Press `Ctrl + F` (or `Cmd + F`) to search.
  - Press `Ctrl + D` (or `Cmd + D`) to toggle theme.
  - Press `Esc` to close any open modal dialog.
  - Press `?` to open the Keyboard Shortcuts modal.
- **💾 LocalStorage Sync & JSON Export:** Keeps your data persistent offline and lets you download a full JSON backup.

---

## 🤖 AI Tools & Development Workflow

This application was engineered through an iterative, AI-augmented development workflow:

1. **AI Specification & Architecture Design (`project_spec.md`):**
   - Utilized prompt engineering to structure the application's domain model, user stories, and state management contract prior to implementation.
2. **Component & Design Token Generation:**
   - Leveraged AI guidance to curate harmonious HSL color tokens, glassmorphism blur ratios, and accessibility-compliant contrast palettes.
3. **Modular JavaScript Implementation:**
   - Generated clean, event-driven ES6+ vanilla JavaScript using an IIFE architecture to prevent global namespace pollution while ensuring rapid DOM reconciliation.
4. **Automated Documentation & Deployment Guide:**
   - Authored the project specification and deployment instructions using structured AI synthesis.

---

## 📁 Project Structure

```
Final Project Studio – Build & Deploy with AI/
├── index.html         # Semantic HTML5 markup, accessibility roles, & modals
├── style.css          # Design tokens, themes, glassmorphism, & animations
├── app.js             # State management, CRUD handlers, filters, & confetti
├── project_spec.md    # Formal engineering specification & architecture doc
└── README.md          # Project guide, AI methodology, & deployment instructions
```

---

## 🚀 Quick Start (Running Locally)

Because TaskFlow Studio is built with standard Web APIs and Vanilla JavaScript, it requires **zero installation steps** and **no npm build steps**.

### Option 1: Direct File Launch
Simply double-click [`index.html`](index.html) or open it directly in any modern browser:
```bash
open index.html
```

### Option 2: Local HTTP Server (Python / Node)
Using Python:
```bash
python3 -m http.server 8080
```
Using Node (`npx serve`):
```bash
npx serve .
```
Then navigate to `http://localhost:8080`.

---

## 🌐 Free Deployment Guide

Deploying TaskFlow Studio to the web takes under 2 minutes with any static hosting platform:

### Method 1: GitHub Pages (Recommended)
1. Initialize Git in the project directory (if not already done):
   ```bash
   git add .
   git commit -m "feat: TaskFlow Studio initial release"
   git push origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root folder `/`, then click **Save**.
4. Your application will be live at `https://<username>.github.io/<repo-name>/`.

### Method 2: Vercel
1. Install Vercel CLI: `npm i -g vercel` (or link via [vercel.com](https://vercel.com)).
2. In the project folder, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy in seconds with a free `.vercel.app` URL.

### Method 3: Netlify
1. Go to [app.netlify.com](https://app.netlify.com/drop).
2. Drag and drop the `Final Project Studio – Build & Deploy with AI` folder directly into the browser.
3. Your app is instantly published with an SSL-secured live link.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Created as part of the GoMyCode curriculum: **Final Project Studio – Build & Deploy with AI**.
