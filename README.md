# roebi Portfolio GitHub

A minimal personal portfolio powered by [gitprofile](https://github.com/arifszn/gitprofile) by Ariful Alam, published via GitHub Pages.

## 🎯 Concept — KISS Principle

This repo follows a **config-only** approach: instead of copying the full gitprofile source, it references gitprofile as a GitHub dependency and builds it inside the GitHub Action. Only the personal configuration is maintained here.

**What lives in this repo:**
- `gitprofile.config.ts` — your personal portfolio configuration (the only file you edit)
- `package.json` — single dependency: `@arifszn/gitprofile`
- `gitprofile-deps/` — copy of gitprofile's `package.json` + `package-lock.json` for Dependabot monitoring
- `.github/workflows/deploy.yml` — the build & deploy pipeline
- `.github/workflows/init-lockfile.yml` — one-time setup: generates your `package-lock.json`
- `.github/workflows/sync-gitprofile-deps.yml` — syncs `gitprofile-deps/` when gitprofile version is bumped
- `.github/dependabot.yml` — weekly security monitoring for both your deps and gitprofile's deps

Everything else (React, Vite, Tailwind, all source files) lives inside gitprofile and is never copied here.

---

## 🚀 First Time Setup

Run these workflows **once** in this order before the first deploy:

### Step 1 — Generate your lockfile
1. Go to **Actions** → **Generate Lockfile** → **Run workflow**

Runs `npm install --package-lock-only` and commits `package-lock.json` to `main`.

### Step 2 — Sync gitprofile-deps
1. Go to **Actions** → **Sync gitprofile-deps** → **Run workflow**

Copies gitprofile's `package.json` and `package-lock.json` into the `gitprofile-deps/` folder and commits them. Dependabot will monitor this folder for security updates from now on.

### Step 3 — Deploy
Push any change to `main`, or go to **Actions** → **Deploy Portfolio** → **Run workflow**.

---

## ⚙️ How it Works — Build & Deploy Workflow

On every push to `main`, the GitHub Action does the following:

```
1. npm install
   → fetches gitprofile source from GitHub into node_modules/

2. cp gitprofile-deps/package.json + package-lock.json
       → node_modules/@arifszn/gitprofile/
   → injects the Dependabot-maintained lockfile into gitprofile

3. cd node_modules/@arifszn/gitprofile && npm ci
   → installs gitprofile's dependencies strictly from the updated lockfile

4. cp gitprofile.config.ts node_modules/@arifszn/gitprofile/gitprofile.config.ts
   → injects your personal config into the gitprofile source

5. cd node_modules/@arifszn/gitprofile && npm run build
   → builds the portfolio app, producing dist/

6. cp -r node_modules/@arifszn/gitprofile/dist ./dist
   → brings the built output back to repo root

7. Deploy dist/ to GitHub Pages
```

---

## 🔧 Configuration

Edit `gitprofile.config.ts` to update your portfolio. Key fields:

```typescript
const CONFIG = {
  github: {
    username: 'roebi',
  },
  base: '/roebi-portfolio-github/',
  seo: {
    title: 'Portfolio of roebi',
    description: '',
    imageURL: '',
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: true,
  },
};

export default CONFIG;
```

See the [gitprofile documentation](https://github.com/arifszn/gitprofile/blob/main/README.md) for all available config options.

---

## 🔄 Keeping Dependencies Up to Date

### Dependabot (automatic)
Dependabot monitors two locations weekly:
- `/` — your own `package.json`
- `/gitprofile-deps` — gitprofile's dependencies

It automatically opens Pull Requests to update `package-lock.json` files when security fixes are available. Merge these after verifying a successful build.

### When you bump the gitprofile version (manual)
If you update `@arifszn/gitprofile` to a new version in your `package.json`:

1. Go to **Actions** → **Sync gitprofile-deps** → **Run workflow**
2. This re-copies the new `package.json` and `package-lock.json` from the new version into `gitprofile-deps/`
3. Commit the result — Dependabot will now monitor the new version's dependencies

---

## 🌐 Live Portfolio

👉 [https://roebi.github.io/roebi-portfolio-github/](https://roebi.github.io/roebi-portfolio-github/)

---

## ⚖️ License & Credits

This project is licensed under the [MIT License](./LICENSE).

A significant portion of this portfolio is built upon the excellent **[gitprofile](https://github.com/arifszn/gitprofile/blob/main/README.md)** project by Ariful Alam. To ensure full compliance with open-source standards, all original third-party licenses are documented here:

📂 **[Third-Party License Directory](./legal/)**

Included in the legal directory:
- `arifszn-gitprofile-LICENSE.txt` – Original license for the portfolio foundation.
