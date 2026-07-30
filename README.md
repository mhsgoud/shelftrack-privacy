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

GitHub Pages is configured to publish the **`docs/`** folder on `main`.

- `docs/index.html` — landing
- `docs/support.html` — FAQ and contact
- `docs/privacy-policy.html` — privacy policy
- `docs/css/site.css` / `docs/js/site.js` — shared chrome
- `docs/assets/` — icon and favicon
- `docs/app-ads.txt` — AdMob verification

Matching copies may exist at the repo root for editing convenience; **`docs/` is what goes live.**

## Publish updates

1. Edit files under `docs/`, then push to `main`.
2. In the repo: **Settings → Pages** → Branch `main` · folder **/docs**.

If the live page looks outdated, open **Actions**, check the latest **pages build and deployment**, then hard-refresh (Ctrl+Shift+R).

Optional: switch Pages source to **GitHub Actions** and re-enable the **Deploy ShelfTrack site** workflow to publish from the repo root instead.
