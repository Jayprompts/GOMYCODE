# React with Next.js Portfolio Checkpoint

A modern, high-performance developer portfolio web application built with **Next.js**, showcasing page-based routing, component-driven architecture, responsive glassmorphic styling, profile and project images, and server-side pre-rendering (`getStaticProps`).

---

## 🎯 Objectives Completed

1. **Getting Started with Next.js**:
   - Initialized and structured with standard Next.js conventions: `pages/`, `components/`, `styles/`, and `public/`.
2. **Page-Based Routing**:
   - Built with Next.js's native file-based routing:
     - `/` $\rightarrow$ [pages/index.js](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/pages/index.js) (Hero, developer avatar, metrics, and call-to-actions)
     - `/about` $\rightarrow$ [pages/about.js](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/pages/about.js) (Biography, technical skills matrix, experience timeline, and education)
     - `/projects` $\rightarrow$ [pages/projects.js](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/pages/projects.js) (Pre-rendered project showcase with tags, images, and live links)
     - `/contact` $\rightarrow$ [pages/contact.js](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/pages/contact.js) (Interactive contact form with state validation and direct contact channels)
3. **Styling Components & Displaying Images**:
   - Dark glassmorphic design system in [styles/globals.css](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/styles/globals.css).
   - High-fidelity vector illustrations and profile picture located in [public/images/](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/React%20with%20Next%20JS/public/images/).
4. **Server-Side Rendering / Static Generation**:
   - Utilizes `getStaticProps` on the Projects page to demonstrate pre-rendering at build time.
5. **Deployment Ready**:
   - Optimized for instant deployment on [Vercel](https://vercel.com) or Netlify.

---

## 🗂️ Project Directory Structure

```text
React with Next JS/
├── public/
│   └── images/
│       ├── profile.svg            # Developer avatar with tech badges
│       ├── project-ai.svg         # AI Studio preview
│       ├── project-ecommerce.svg  # E-Commerce preview
│       ├── project-taskpulse.svg  # TaskPulse Redux preview
│       └── project-crypto.svg     # Crypto analytics preview
├── pages/
│   ├── _app.js                    # Custom App wrapper (Layout & globals.css)
│   ├── index.js                   # Route: / (Home Page)
│   ├── about.js                   # Route: /about (About Page)
│   ├── projects.js                # Route: /projects (Projects Page with getStaticProps)
│   └── contact.js                 # Route: /contact (Contact Page)
├── components/
│   ├── Layout.js                  # Global page wrapper with SEO meta tags
│   ├── Navbar.js                  # Navigation bar with active route highlight via useRouter
│   ├── Footer.js                  # Social channels and copyright
│   └── ProjectCard.js             # Reusable card for project items
├── styles/
│   └── globals.css                # Custom dark glassmorphic stylesheet
├── package.json
└── README.md
```

---

## 🚦 Available Routes

| Path | Page View | Purpose |
|---|---|---|
| `/` | `Home` | Hero introduction, profile avatar, metrics cards, quick navigation |
| `/about` | `About` | Personal bio, skills tags, career experience timeline, education |
| `/projects` | `Projects` | Showcase of 4 full-stack projects pre-rendered via `getStaticProps` |
| `/contact` | `Contact` | Contact form with live feedback, email, phone, and response times |

---

## 🚀 How to Run Locally

1. Navigate to the project folder:
   ```bash
   cd "React with Next JS"
   ```

2. Start the Next.js development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build and test production bundle:
   ```bash
   npm run build
   npm start
   ```
