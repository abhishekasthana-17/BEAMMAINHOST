import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
// import fetch from 'node-fetch'; // If you're using ESM

const BASE_URL = 'https://www.beamwallet.com';

async function generateSitemap() {
  const links = [];

  // 1. Add static routes manually
  const staticRoutes = [
    '/',
    '/about-us',
    '/investors',
    '/careers',
    '/contacts',
    '/privacy-policy',
    '/terms',
    '/news',
    '/careers/spontaneous-application',
    '/technology-partnerships',
    '/banks',
    '/software-partners',
    '/visionary-developers',
    '/local-partners',
    '/lp-form',
    '/partnerships',
    '/pay-in-store',
    '/pay-online',
    '/local-store',
    '/help-center',
    '/ls-inst-form',
    '/os-inst-form',
    '/investors-form',
    '/careers/mobile-developer',
    '/careers/java-scala-developer',
    '/careers/plugin-developer-for-e-commerce-platforms',
    '/careers/discover-your-future-with-beam-wallet',
    '/careers/graphic-designer',
    '/careers/seo-specialist',
  ];
  staticRoutes.forEach(path => {
    links.push({ url: path, changefreq: 'monthly', priority: 0.8 });
  });

  // 2. Fetch dynamic CMS pages from Strapi
  // const strapiRes = await fetch('http://localhost:1337/api/pages?fields[0]=slug');
  // const strapiData = await strapiRes.json();
  // const pages = strapiData.data || [];

  // pages.forEach(page => {
  //   const slug = page.attributes.slug;
  //   links.push({
  //     url: `/cms/pages/${slug}`,
  //     changefreq: 'weekly',
  //     priority: 0.7,
  //   });
  // });

  // 3. Generate the sitemap XML
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream('../../public/sitemap.xml'); // ← Vite uses /public for static assets

  streamToPromise(sitemap).then(() => console.log('✅ Sitemap generated!'));

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();
}

generateSitemap().catch(console.error);
