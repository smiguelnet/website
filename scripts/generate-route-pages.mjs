import fs from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

const pages = [
  {
    path: '/',
    title: 'Sergio Miguel | CTO & Software Architect',
    description:
      "Sergio Miguel's portfolio: AI-driven software architecture, domain design, and delivery acceleration across web, mobile, and cloud.",
  },
  {
    path: '/experience',
    title: 'Experience | Sergio Miguel',
    description:
      'Professional timeline across fintech, blockchain, telecom, and enterprise architecture leadership.',
  },
  {
    path: '/research',
    title: 'Research Projects | Sergio Miguel',
    description:
      'Selected research and applied engineering projects in APIs, mobile platforms, architecture accelerators, and DevOps.',
  },
  {
    path: '/research/android-architecture',
    title: 'Android Architecture | Sergio Miguel',
    description:
      'Android starter application architecture: UI scaffold, CRUD workflow, and data synchronization strategies (Server-First and Local-First).',
  },
  {
    path: '/profile',
    title: 'Profile | Sergio Miguel',
    description:
      'Education, certifications, and technical skills spanning software architecture, cloud, data, and modern engineering.',
  },
];

const siteUrl = 'https://www.smiguel.net';

const upsertTag = (html, matcher, replacement) =>
  matcher.test(html)
    ? html.replace(matcher, replacement)
    : html.replace('</head>', `  ${replacement}\n</head>`);

const renderForPage = (baseHtml, page) => {
  const pageUrl = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
  let html = baseHtml;

  html = upsertTag(html, /<title>.*?<\/title>/is, `<title>${page.title}</title>`);
  html = upsertTag(
    html,
    /<meta\s+[^>]*name=["']description["'][^>]*>/i,
    `<meta name="description" content="${page.description}" />`,
  );

  html = upsertTag(
    html,
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${pageUrl}" />`,
  );

  html = upsertTag(
    html,
    /<meta\s+[^>]*property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${page.title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+[^>]*property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${page.description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+[^>]*property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${pageUrl}" />`,
  );

  html = upsertTag(
    html,
    /<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${page.title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${page.description}" />`,
  );

  return html;
};

const main = async () => {
  const baseHtml = await fs.readFile(indexPath, 'utf-8');

  for (const page of pages) {
    if (page.path === '/') continue;
    const routeDir = path.join(distDir, page.path.slice(1));
    await fs.mkdir(routeDir, { recursive: true });
    await fs.writeFile(path.join(routeDir, 'index.html'), renderForPage(baseHtml, page), 'utf-8');
  }

  // Fallback page for static hosts that support custom 404 fallback.
  await fs.writeFile(path.join(distDir, '404.html'), baseHtml, 'utf-8');

  process.stdout.write('Generated SEO route pages and 404 fallback.\n');
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
