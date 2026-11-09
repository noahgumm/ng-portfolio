# Noah Gumm — Portfolio

A React (Create React App) portfolio deployed to GitHub Pages.

## Edit the content

- `src/data/profile.js` — name, headline, bio, skills, education, email, links
- `src/data/projects.json` — one entry per project (copy an existing block to add one)
- `public/NoahGummResume.pdf` — replace this file to update the resume link

To add a screenshot to a project, put the image in `public/` and add `"image": "/yourfile.png"` to that project. Without one, the card shows a terminal-style graphic from `coverText`.

## Run locally

```bash
npm install
npm start
```

## Deploy

```bash
npm run deploy
```
