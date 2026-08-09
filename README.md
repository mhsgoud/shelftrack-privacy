# ShelfTrack — companion site (GitHub Pages)

Public marketing and policy site for **ShelfTrack**. The app source stays private.

## Live URLs

| Page | URL |
|------|-----|
| Home | https://shelftrack.app/ |
| Support | https://shelftrack.app/support.html |
| Privacy policy | https://shelftrack.app/privacy-policy.html |

Legacy GitHub URL (still works until you change it): `https://mhsgoud.github.io/shelftrack-privacy/`

Use the **privacy policy** URL in Play Console → App content → Privacy policy.

### Custom domain (Namecheap → GitHub Pages)

1. In this repo: **Settings → Pages → Custom domain** → enter `shelftrack.app` → Save. Enable **Enforce HTTPS** once DNS is ready.
2. At Namecheap → **Domain List** → **Manage** → **Advanced DNS**, set:

**A Records** (host `@` → GitHub Pages):

| Type | Host | Value |
|------|------|--------|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |

**www** (optional but recommended):

| Type | Host | Value |
|------|------|--------|
| CNAME Record | `www` | `mhsgoud.github.io.` |

Remove Namecheap parking / URL redirect records that conflict with `@`.

3. Wait for DNS (often 15–60 minutes, sometimes up to 24h). Then tick **Enforce HTTPS** in GitHub Pages.
4. Update Play Console + app `privacyPolicyUrl` to `https://shelftrack.app/privacy-policy.html`.

The `docs/CNAME` file keeps the custom domain after each deploy.


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
