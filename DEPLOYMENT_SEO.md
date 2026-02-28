# SEO + Friendly Routes Deployment (AWS S3 Static Hosting)

This project now supports friendly URLs and route-level SEO metadata for:

- `/`
- `/professional-journey`
- `/research`
- `/qualifications`

## 1) Build output (includes SEO route pages)

```bash
npm run build
```

The build now generates:

- `dist/index.html` (home)
- `dist/professional-journey/index.html`
- `dist/research/index.html`
- `dist/qualifications/index.html`
- `dist/sitemap.xml`
- `dist/robots.txt`
- `dist/404.html`

## 2) S3 bucket setup

- Enable static website hosting **or** use S3 as CloudFront origin (recommended with OAC).
- Upload the full `dist/` folder contents.

If using S3 Website Hosting endpoint directly:

- Index document: `index.html`
- Error document: `404.html`

## 3) CloudFront rewrite for friendly URLs

Attach this CloudFront Function to **Viewer Request** behavior:

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Skip files with extensions
  if (uri.includes('.')) {
    return request;
  }

  // Route folders to index.html
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else {
    request.uri = uri + '/index.html';
  }

  return request;
}
```

This ensures:

- `/research` -> `/research/index.html`
- `/professional-journey` -> `/professional-journey/index.html`

## 4) CloudFront caching and invalidation

After each deployment:

```bash
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> \
  --paths "/*"
```

For better caching strategy:

- Long cache (`max-age=31536000, immutable`) for `/assets/*`
- Short cache (`max-age=300` to `max-age=3600`) for HTML and sitemap/robots

## 5) Route-level SEO behavior

- Static route HTML files include route-specific title/description/canonical/OG/Twitter tags.
- Client-side navigation also updates meta tags dynamically.

## 6) Verify after deploy

- Open each route directly in browser:
  - `https://www.smiguel.net/`
  - `https://www.smiguel.net/professional-journey`
  - `https://www.smiguel.net/research`
  - `https://www.smiguel.net/qualifications`
- Confirm page source contains correct `<title>` and `meta description`.
- Verify:
  - `https://www.smiguel.net/robots.txt`
  - `https://www.smiguel.net/sitemap.xml`

## 7) Search engine onboarding

- Add property in Google Search Console.
- Submit `https://www.smiguel.net/sitemap.xml`.

