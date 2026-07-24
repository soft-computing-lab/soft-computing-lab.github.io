# Soft Computing Lab — Website

A static website for the Soft Computing Lab (Prof. Millie Pant), Department of
Mathematics, IIT Roorkee. Plain HTML/CSS/JS — no build step, no server required.

## Pages
- `index.html` — Home
- `people.html` — PI, research group, collaborators
- `research.html` — Research areas
- `publications.html` — Searchable journal + conference publication list
- `announcements.html` — News timeline
- `about.html` — About the lab & department

## Editing content
- **Publications**: edit `data/pub-data.js` (two arrays, `JOURNALS` and
  `CONFERENCES` — plain JSON-like objects, just add/edit entries).
- **People**: edit the `.person` blocks in `people.html`; put group members'
  photos in `images/` and update the `<img src>` path.
- **Announcements**: edit the `.tl-item` blocks in `announcements.html`.
- **Colors/fonts**: all design tokens are CSS variables at the top of
  `css/style.css` (`:root { --ink, --paper, --brass, --teal … }`).

## Preview locally
Publications data loads via a `<script>` tag, so the site works even opening
`index.html` directly by double-clicking it — no local server required. If
you'd like a local server anyway (optional):

```
cd lab-site
python3 -m http.server 8000
# visit http://localhost:8000
```

## Free hosting options

**GitHub Pages (recommended, free, custom domain support)**
1. Create a new GitHub repository and push the contents of this folder.
2. Repo → Settings → Pages → Source: "Deploy from branch" → `main` / `/root`.
3. Your site will be live at `https://<username>.github.io/<repo>/` within a
   couple of minutes.

**Netlify (free, drag-and-drop)**
1. Go to https://app.netlify.com/drop
2. Drag the `lab-site` folder onto the page.
3. Netlify gives you a live URL immediately; you can rename it or attach a
   custom domain for free.

**Vercel (free)**
1. https://vercel.com/new → "Deploy" → upload this folder or connect a repo.

Any of these three will host the site for free indefinitely on a subdomain
(e.g. `softcomputinglab-iitr.netlify.app`), and all support attaching a
custom domain later if the lab acquires one (e.g. via IIT Roorkee's own
domain infrastructure, which the institute's IT services can usually
subdomain for a lab, e.g. `scl.iitr.ac.in`).
