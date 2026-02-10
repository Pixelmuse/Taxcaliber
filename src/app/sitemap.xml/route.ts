const baseUrl = "https://taxcaliber.com";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/services/bookkeeping", priority: "0.8", changefreq: "monthly" },
  { path: "/services/tax-preparation", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy", priority: "0.5", changefreq: "yearly" },
  { path: "/terms", priority: "0.5", changefreq: "yearly" },
];

const buildSitemap = () => {
  const now = new Date().toISOString();
  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
};

export async function GET() {
  return new Response(buildSitemap(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
