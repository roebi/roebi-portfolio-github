# roebi Portfolio GitHub

A minimal personal portfolio powered by [gitprofile](https://github.com/arifszn/gitprofile) by Ariful Alam, published via GitHub Pages.

## 🎯 Concept — KISS Principle

This repo follows a **config-only** approach: instead of copying the full gitprofile source, it references gitprofile as a GitHub dependency and builds it inside the GitHub Action. Only the personal configuration is maintained here.

**What lives in this repo:**
- `gitprofile.config.ts` — your personal portfolio configuration (the only file you edit)
- `package.json` — single dependency: `@arifszn/gitprofile`
- `.github/workflows/deploy.yml` — the build & deploy pipeline

Everything else (React, Vite, Tailwind, all source files) lives inside gitprofile and is never copied here.

## ⚙️ How it Works — Build & Deploy Workflow

On every push to `main`, the GitHub Action does the following:

```
1. npm install
   → fetches gitprofile source from GitHub into node_modules/

2. cd node_modules/@arifszn/gitprofile && npm install
   → installs gitprofile's own build dependencies (Vite, Tailwind, etc.)

3. cp gitprofile.config.ts node_modules/@arifszn/gitprofile/gitprofile.config.ts
   → injects your personal config into the gitprofile source

4. cd node_modules/@arifszn/gitprofile && npm run build
   → builds the portfolio app, producing dist/

5. cp -r node_modules/@arifszn/gitprofile/dist ./dist
   → brings the built output back to repo root

6. Deploy dist/ to GitHub Pages
```

## 🔧 Configuration

Edit `gitprofile.config.ts` to update your portfolio. Key fields:

```typescript
const CONFIG = {
  github: {
    username: 'roebi',        // your GitHub username
  },
  base: '/roebi-portfolio-github/', // your GitHub Pages repo path
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: true,
  },
  // ... projects, social links, skills, etc.
};

export default CONFIG;
```

See the [gitprofile documentation](https://github.com/arifszn/gitprofile/blob/main/README.md) for all available config options.

## 🚀 Live Portfolio

👉 [https://roebi.github.io/roebi-portfolio-github/](https://roebi.github.io/roebi-portfolio-github/)

## 🔄 Dependency Updates

[Dependabot](https://github.com/roebi/roebi-portfolio-github/pulls) is enabled and automatically creates pull requests for indirect dependency updates in `package-lock.json`. Merge these after verifying a successful build.

---

## ⚖️ License & Credits

This project is licensed under the [MIT License](./LICENSE).

A significant portion of this portfolio is built upon the excellent **[gitprofile](https://github.com/arifszn/gitprofile/blob/main/README.md)** project by Ariful Alam. To ensure full compliance with open-source standards, all original third-party licenses are documented here:

📂 **[Third-Party License Directory](./legal/)**

Included in the legal directory:
- `arifszn-gitprofile-LICENSE.txt` – Original license for the portfolio foundation.
