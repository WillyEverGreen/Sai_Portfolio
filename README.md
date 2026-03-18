# Sai Portfolio

Personal portfolio website built with plain HTML, CSS, and JavaScript.

## Project Structure

- `index.html`: main landing page
- `style.css`: global styles
- `main.js`, `main2.js`: interactive behavior and animation scripts
- `resume.html`, `resume.css`: resume page and styles
- `assets`: image/icon files kept at repository root

## Push To GitHub

Run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If the remote already exists, update it with:

```bash
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## GitHub Pages Deployment (Auto)

This repo is configured to deploy automatically with GitHub Actions using:

- `.github/workflows/deploy-pages.yml`

### One-time GitHub setup

1. Open repository settings on GitHub.
2. Go to **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Deploy flow

1. Push to `main` (or `master`).
2. GitHub Action runs and publishes the site.
3. Your site will be available at:

```text
https://<your-username>.github.io/<your-repo>/
```

## Local Preview

Open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.