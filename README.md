# Soft Computing Lab IIt Roorkee

Soft Computing Lab (Prof. Millie Pant), Department of
Applied Mathematics and Scientific Computing, IIT Roorkee.
Click here --> https://soft-computing-lab.github.io/
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
