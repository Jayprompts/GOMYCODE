# Foundations of AI-Powered Vibe Coding Checkpoint

This document captures the AI prompt, design customizations, layout structure, and profile goals created for this checkpoint.

---

## 1. AI Prompt Used

> **Primary Instruction Prompt:**
> *"Generate a modern one-section landing page with a hero header for my personal intro profile using pure HTML/CSS/JS. Prompt it to include: my name ('Jay'), a subtitle ('Frontend Developer & AI-Augmented Creative Builder'), and a button labeled 'View My Projects'. Showcase my developer profile, passions (Interactive UI, AI Coding, Creative CSS, Web Performance), and a short description of my goals as a frontend developer. Customize the layout with a 2-column glassmorphism hero and provide customizable color themes."*

---

## 2. Layout & Design Customizations

### Layout Architecture
- **One-Section Landing Hero (`<main>` + `<section id="hero">`):**
  - **Left Column:** Status badge (*Available for Frontend & AI Roles*), large expressive heading with wave animation, subtitle, goal statement, passions tag cloud, and call-to-action buttons (*View My Projects* & *Get in Touch*).
  - **Right Column:** Floating 3D-styled glassmorphism profile showcase card featuring an avatar with verified status, developer bio meta, core tech stack badges, and key metrics.
- **Top Navigation Bar:** Integrated brand monogram (`<Jay.dev />`) and an interactive **Vibe Color Switcher** to customize theme accents on the fly.
- **Projects Modal:** Clicking the required button **"View My Projects"** opens an accessible modal dialog highlighting recent projects created during the GoMyCode course.

### Customized Color Themes
Built using CSS custom properties with dynamic `[data-accent]` attributes:
- **Indigo / Violet (Default):** `#6366f1` to `#ec4899` gradient with ambient glows.
- **Cyber Cyan:** `#06b6d4` to `#8b5cf6` futuristic theme.
- **Emerald Mint:** `#10b981` to `#06b6d4` fresh high-contrast green.
- **Sunset Rose:** `#f43f5e` to `#fb923c` vibrant warm gradient.

---

## 3. Profile Details & Goal Statement

- **Name:** Jay
- **Subtitle:** Frontend Developer & AI-Augmented Creative Builder
- **Goal Statement:**
  > *"My goal as a frontend developer is to design intuitive, high-performance, and accessible web applications that bridge human creativity with generative AI. I focus on creating polished user experiences with smooth micro-animations, bulletproof architecture, and modern web standards."*
- **Passions:**
  - ⚡ Interactive UI
  - 🤖 AI-Assisted Vibe Coding
  - 🎨 Creative CSS & Motion
  - 🚀 Web Performance
  - 📱 Responsive Design

---

## 4. File Directory

- [index.html](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Foundations%20of%20AI-Powered%20Vibe%20Coding%20checkpoint/index.html) — Landing page hero structure & project modal.
- [style.css](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Foundations%20of%20AI-Powered%20Vibe%20Coding%20checkpoint/style.css) — Glassmorphism tokens, animations, and dynamic theme switcher styles.
- [script.js](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Foundations%20of%20AI-Powered%20Vibe%20Coding%20checkpoint/script.js) — Theme switcher logic, modal interactions, and canvas particle system.
- [prompt.md](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Foundations%20of%20AI-Powered%20Vibe%20Coding%20checkpoint/prompt.md) — Documentation of prompt and customizations.
