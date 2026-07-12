# The Reserve — Student Build Tasks

You are finishing two sections of the website yourself: the **Seasonal
Curation grid** and the **Footer**. Everything else is already built so you
can focus on these.

## How the tiers work

Each task has three levels. **Do them in order. Finish what you can — it is
fine if you only reach 🟢 or 🟡.** Don't wait for the class; if you finish
early, move to the next tier on your own.

| Tier | Meaning |
|------|---------|
| 🟢 **Guided**   | Step-by-step with the class names given. Everyone should reach this. |
| 🟡 **Build**    | Same goal, no hints. Recall it or look it up. |
| 🔴 **Research** | A stretch that needs something we haven't covered. Look it up, then apply it. |

The instructions live **inside the code as comments** — read them where you
work:
- Grid → `index.html`, look for `🎓 STUDENT TASK 1`
- Footer → `index.html` (`🎓 STUDENT TASK 2`) + `css/styles.css` (`SECTION 15`)

Match your screenshots on the board. Open `index.html` in your browser and
refresh after each change.

📄 Keep **`The-Reserve-Bootstrap-CSS-Cheatsheet.pdf`** open beside you — it
explains what every class does. Look a class up there *before* asking.

---

## ✅ Getting started (do this first)

1. [ ] Open the project folder in your code editor (VS Code).
2. [ ] Open **`index.html`** and **`css/styles.css`** in two tabs.
3. [ ] Double-click `index.html` to open it in your browser (Chrome).
4. [ ] Keep the cheat-sheet PDF open for class lookups.
5. [ ] Work on **Task 1 first**, then **Task 2**.
6. [ ] After *every* change: **save the file → refresh the browser** to see it.

---

## Task 1 — Seasonal Curation grid (Bootstrap)

You write **HTML only** here. The card styling is already in the CSS, so a
correctly-built card looks finished straight away. Copy the **example card**
in `index.html` and swap in each dish below.

| Dish | Price | Description | Tier |
|------|-------|-------------|------|
| Pan-Seared Scallops *(example — done for you)* | $28 | Succulent scallops with pea puree | 🟢 |
| Truffle Risotto | $34 | Creamy arborio rice with black truffle | 🟢 |
| Filet Mignon | $42 | Grass-fed beef with rosemary butter | 🟢 |
| Lavender Glazed Duck | $38 | Oak-grilled duck breast with cherry reductions | 🔴 |
| Botanical Garden Tart | $16 | Handcrafted shortbread pastry with local elderberry cream | 🔴 |

### Image links (paste into each card's `<img src="...">`)

- **Truffle Risotto:**
  `https://lh3.googleusercontent.com/aida-public/AB6AXuCsjojyPVVXXDxz3_OAlPxDqq0WSTMkHPQovyIs7dk4TZOdxvq5OlfAFoLffWL9WmJpfCdl6ZwgOJosjYi_VH7hF8WG3gZ5GVvsZFD1pE9imMZzvAuq7nqwcUqG26Tr60dryVUKvV_Kjg_gbzoOhMkNVyKWvxL42CuuhOgbDjd1BPMHfvb0sFAqAbwu4Bz88vYalkPhEaFvbYTPrYlOkbfZ2oLCSWlrS-z09cVnfRtA4sSV51W7ut5smqJ0qSkRl9dGVPvDfHUwYb0`
- **Filet Mignon:**
  `https://lh3.googleusercontent.com/aida-public/AB6AXuBI7_AOZmmnZIewpy1NgZxRmDnVudMDzpsMStL2IpYADVH9Ik8GjFDbLPYoSjXe_PZi6koctbyC3Wy0acY3NvAf8iUdpSR15XV8902deiFfB3FbOSrQVhFh97PkjDEWyj3Q9wqt1Pb4lpwKprpLfjF_SNEhybVfzLK8LnZEJ8IKV2rocxg5I6zL2Ula1BHm8zG02Q2Nn6461DY44NUM6FNJlDK4DZGXz9jVzm9MOpZjNRxg0rcGi5qVgeIyjP0HVc9-DWOjEXbgIlg`
- **Lavender Glazed Duck:**
  `https://lh3.googleusercontent.com/aida-public/AB6AXuDUzaxiQRPV2N5u5w5cwcfOkzMV_8st_9qRsMaQUOuocmGy-PmwBtoHDVZCTLhKM3_FTfIhQa18mhUV7PQFzQC8GGzUtwq7KhxcZYSSmYCLNSbXvRP16k4q2GwdcxcFITWrQuOYcKxrvpaTT9mMiTV1x0l-Rs3e_Inf7CaiZkh8pBLWJgIdGGICPNJPvc9D49RuCqHOeDS6zCHNz0rxDfvJvwt5NN18K-gv9enwnx02dhd2xiKlxlCC5OxGnHVMcF9B2ORq2y232Qo`
- **Botanical Garden Tart:** *(reuse the Truffle Risotto link above)*

### Step by step
1. [ ] In `index.html`, find the comment `🎓 STUDENT TASK 1`.
2. [ ] Look at the ⭐ **example card** just below it — that's your model.
3. [ ] Find the line `<!-- 🟢 TODO: add the "Truffle Risotto" card here -->`.
4. [ ] Copy the **whole** `<div class="col-12 col-md-4 menu-col"> … </div>`
       block (from the example) and paste it under that TODO.
5. [ ] In your pasted copy, change 4 things: the image `src`, the `menu-title`,
       the `menu-price`, and the `menu-desc` — use the table above.
6. [ ] Save → refresh the browser. You should now see **2 cards**.
7. [ ] Repeat steps 4–6 for **Filet Mignon** under its TODO. Now **3 cards**. 🟢
8. [ ] 🟡 Make the browser window narrow — the cards should stack into 1 column.
9. [ ] 🔴 Add the last 2 dishes (Lavender Duck, Botanical Tart) the same way.

### Done when
- [ ] Three cards sit side-by-side on a laptop and stack on a phone. ✅
- [ ] (Research) All five dishes show, and you can explain `row` / `col-md-4` / `g-4`.

---

## Task 2 — Footer (CSS)

Here you write **CSS**. The footer HTML is done but unstyled. Open
`css/styles.css`, find **SECTION 15**, and fill in the rules.

- 🟢 Dark background, light text, padding, centred text.
- 🟡 Three columns side-by-side with flexbox; stack them on small screens.
- 🔴 Hover colour on the links + a circular hover background on the mail icon.

### Step by step
1. [ ] First look at the footer in your browser — it's plain white text now.
2. [ ] Open `css/styles.css` and scroll to **SECTION 15 — FOOTER**.
3. [ ] 🟢 Inside `.site-footer { }` add three rules: `background-color`,
       `color`, and `padding`. (Use `var(--color-charcoal)` for the background.)
4. [ ] 🟢 Inside `.footer-grid { }` add `text-align: center;`
5. [ ] Save → refresh. The footer should now be **dark with centred text**. 🟢
6. [ ] 🟡 Change `.footer-grid` to `display: flex;` and add
       `justify-content: space-between;` — the 3 groups spread across.
7. [ ] 🟡 Add a `@media (max-width: 768px)` block that sets
       `.footer-grid { flex-direction: column; }` so it stacks on phones.
8. [ ] 🔴 Style `.footer-links a` with a colour + `transition`, then a
       `:hover` colour. Give `.footer-social` a circular hover background.
9. [ ] Stuck on a property? Check the cheat-sheet PDF or search MDN.

### Done when
- [ ] The footer is dark with the three groups laid out and readable on mobile. ✅
- [ ] (Research) Links and the mail icon react on hover.

---

### For the teacher
Answer keys are in the `_teacher/` folder:
- `index-SOLUTION.html` — full finished page
- `footer-SOLUTION.css` — the SECTION 15 styling
