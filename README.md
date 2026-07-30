# ShelfTrack — companion site (GitHub Pages)

Public marketing and policy site for **ShelfTrack**. The app source stays private.

## Live URLs

| Page | URL |
|------|-----|
| Home | https://mhsgoud.github.io/shelftrack-privacy/ |
| Support | https://mhsgoud.github.io/shelftrack-privacy/support.html |
| Privacy policy | https://mhsgoud.github.io/shelftrack-privacy/privacy-policy.html |

Use the **privacy policy** URL in Play Console → App content → Privacy policy (path must stay stable).

## Local structure

- `index.html` — landing
- `support.html` — FAQ and contact
- `privacy-policy.html` — privacy policy
- `css/site.css` / `js/site.js` — shared chrome
- `assets/` — icon and favicon
- `app-ads.txt` — AdMob verification

## Publish updates

1. Push to `main` (GitHub Actions deploys automatically).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If the live page looks outdated, open **Actions**, run **Deploy ShelfTrack site to GitHub Pages**, then hard-refresh (Ctrl+Shift+R).
