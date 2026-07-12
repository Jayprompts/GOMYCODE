# CSS Challenge — Team Cards 🎯

**Goal:** Recreate the target design as closely as you can. You get the HTML content and a target to match — **you write all the CSS yourself.**

This one is harder on purpose. Some requirements use CSS we *haven’t* covered in class. That’s the point: a real developer looks things up. Each of those is marked 🔍 with a search hint. Use **MDN** (search “mdn “ + the property), DevTools, and Pesticide.

-----

## The brief

1. Open `challenge-index.html` — it’s three profile cards with no styling.
1. Open `challenge-solution.html` in your browser to see the **target** you’re aiming for.
1. In `challenge-styles.css`: add your own classes to the HTML, then style everything to match.

-----

## Requirements

### Core (you learned these)

- [ ] The three cards sit in a **row** and **stack to one column** on a narrow screen (resize to check)
- [ ] A Google Font for the whole page
- [ ] Cards have padding, rounded corners, and good spacing
- [ ] A styled **button** with a colour change on hover

### Research required 🔍 (look these up!)

- [ ] 🔍 The avatar image is a **perfect circle** and never squished — *search: “mdn object-fit”, “css border-radius circle”*
- [ ] 🔍 Each card has a soft **shadow** that makes it float off the page — *search: “mdn box-shadow”*
- [ ] 🔍 On **hover**, the whole card lifts up smoothly — *search: “css transform translateY”, “mdn transition”*
- [ ] 🔍 The coloured **banner** at the top of each card is a **gradient**, not a flat colour — *search: “mdn linear-gradient”*
- [ ] 🔍 The avatar **overlaps** the banner (sits half on it) — *search: “css negative margin” or “position relative”*

### Stretch (only if you finish early) 🚀

- [ ] 🔍 A small **green “online” dot** sitting on the corner of the avatar — *search: “css position absolute”*
- [ ] The skill tags change colour when you hover them

-----

## How to add images 🖼️

You’ll need images for the avatars. Here’s everything you need.

**The tag:**

```html
<img src="WHERE-THE-IMAGE-IS" alt="a short description">
```

`alt` is the text shown if the image fails to load — always write one.

**Two ways to point `src` at an image:**

1. **From the web (easiest — use this for the challenge).** Just paste a URL. Free placeholder services:
- `https://i.pravatar.cc/300` → a random avatar photo (great for these cards)
- `https://i.pravatar.cc/300?img=5` → add `?img=1..70` to pick a specific face
- `https://picsum.photos/400` → a random real photo
- For real free photos to download: **Unsplash** or **Pexels**
1. **From your own project (a local file).** Put the image in a folder next to your HTML:
   
   ```
   my-project/
     index.html
     styles.css
     images/
       me.jpg
   ```
   
   Then point to it with a **relative path**:
   
   ```html
   <img src="images/me.jpg" alt="my photo">
   ```

**Sizing & shaping images with CSS:**

```css
.avatar {
  width: 90px;
  height: 90px;
  object-fit: cover;     /* fill the box, don't stretch  🔍 */
  border-radius: 50%;    /* makes it a circle */
}
img { max-width: 100%; } /* stops any image overflowing its box */
```

**Bonus — background images (CSS, not an `<img>` tag):** for decorative backgrounds, do it in CSS instead:

```css
.banner {
  background-image: url('images/cover.jpg');
  background-size: cover;     /* fill the area nicely */
  background-position: center;
}
```

Rule of thumb: **content** image (a person, a product) → `<img>`. **Decoration** (a background) → CSS `background-image`.

-----

## Done when…

Your page matches the target, every checkbox above is ticked, and you can **explain one property you had to research** to the person next to you. That last part is the real test. 💪