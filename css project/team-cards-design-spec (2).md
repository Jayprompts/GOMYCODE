# Team Cards — Design Spec 🎨

You have the screenshot. This sheet gives you the exact **values** a designer would hand a developer — colours, fonts, sizes, and the content. **It does NOT tell you which CSS to use** — that's your job (see the research list at the bottom).

---

## 🔤 Fonts (Google Fonts)

Add this to your `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Sora:wght@400;500;600&display=swap" rel="stylesheet">
```
- **Bricolage Grotesque** → the page title and each person's name (bold)
- **Sora** → everything else (role, bio, tags, button)

---

## 🎨 Colour palette

| Colour | Hex | Used for |
|---|---|---|
| Ink (main text) | `#1e2233` | names, title |
| Muted text | `#7a8096` | the role line |
| Bio text | `#555b6e` | the bio paragraph |
| Brand | `#6366f1` | button, banner, tag hover |
| Brand dark | `#4f46e5` | button on hover, tag text |
| Tag background | `#eef0fe` | the skill pills |
| Online green | `#22c55e` | the little status dot |
| Page background | `#eef1f7` | behind everything |
| Card background | `#ffffff` | the cards |
| Banner gradient | `#6366f1` → `#22d3ee` | top strip of each card (diagonal) |

---

## 📐 Sizes & spacing

**Layout**
- 3 cards in a row, **28px** gap between them, whole group max **980px** wide and centred
- On screens **720px wide or smaller** → cards become **1 column**
- Page padding: ~56px top/bottom, 24px sides

**Title**
- ~38px, bold, centred, ~40px space below it

**Card**
- Corners rounded **18px**, white background, a soft shadow underneath
- On hover: the card **lifts up ~8px** and the shadow gets bigger (smoothly)

**Banner (top strip)**
- Height **84px**, diagonal gradient (see palette)

**Avatar**
- **92 × 92px**, perfect circle, **4px white** border
- It **overlaps upward** onto the banner (sits half on the colour, half off)
- Online dot: **16px** green circle with a 3px white border, bottom-right of the avatar

**Text**
- Name ~21px · Role ~14px (muted) · Bio ~14px with comfortable line spacing

**Skill tags**
- Small pills: ~12px text, padding ~5px 12px, **fully rounded**, 8px gap
- On hover: background turns brand colour, text turns white

**Button ("Follow")**
- White text on brand colour, padding ~11px 30px, **fully rounded**, hand cursor
- Darkens on hover

---

## 🧱 The content (use this exact text)

**Title:** Our Team

| Name | Role | Bio | Tags | Image |
|---|---|---|---|---|
| Aisha Bello | Frontend Developer | Loves clean UI, coffee, and arguing about tabs vs spaces. | React, CSS, Figma | `https://i.pravatar.cc/300?img=12` |
| Tunde Okafor | Backend Engineer | Turns coffee into APIs. Will optimise a query for fun. | Node, SQL, Docker | `https://i.pravatar.cc/300?img=33` |
| Chioma Eze | Product Designer | Pixel-perfectionist. Thinks in user flows and whitespace. | UX, Figma, CSS | `https://i.pravatar.cc/300?img=45` |

---

## 🔍 Research BEFORE you start

You haven't been taught all of these in class — look them up (search **"mdn " + the topic**). Figure these out first:

1. How to **import and use a Google Font**
2. How to lay out items in a **responsive grid** that drops from 3 columns to 1 on small screens — *("css grid", "media query")*
3. How to make an image a **perfect circle that isn't squished** — *("border-radius circle", "object-fit")*
4. How to make one element **overlap** another — *("negative margin", or use positioning from #8)*
5. How to make a **gradient background** — *("linear-gradient")*
6. How to give an element a **soft shadow** — *("box-shadow")*
7. How to make a hover effect **animate smoothly** — *("transform translateY", "transition")*
8. **CSS positioning** — how `position: relative` and `position: absolute` (with `top` / `right` / `bottom` / `left`) let you place an element precisely. You'll need it to put the **small green dot on the corner** of the avatar — *("css position absolute", "position relative explained")*
9. *(Optional)* How to store your colours once and reuse them — *("css variables", ":root", "var()")*

> **Tip:** build it in stages. First the structure + content, then colours + fonts, then layout, then the fancy bits (overlap, hover, shadow). Don't try to do everything at once.
