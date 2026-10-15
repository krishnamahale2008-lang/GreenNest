import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { HomePage } from '../src/pages/HomePage.tsx';
import { ArticlePage } from '../src/pages/ArticlePage.tsx';
import { NotFoundPage } from '../src/pages/NotFoundPage.tsx';
import { homePageData, articles } from '../src/data/articles.ts';

const BASE_URL = 'https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app';

interface PageConfig {
  outputFilePath: string;
  urlPath: string;
  title: string;
  metaDescription: string;
  image: string;
  schemaType: 'WebSite' | 'Article';
  component: React.ReactElement;
  publishedDate?: string;
  keywords?: string[];
}

const pages: PageConfig[] = [
  {
    outputFilePath: 'index.html',
    urlPath: '/',
    title: homePageData.title,
    metaDescription: homePageData.metaDescription,
    image: `${BASE_URL}${homePageData.heroImage.src}`,
    schemaType: 'WebSite',
    component: <HomePage />,
    keywords: [homePageData.mainKeyword, ...homePageData.relatedKeywords]
  },
  {
    outputFilePath: 'best-balcony-plants-india/index.html',
    urlPath: '/best-balcony-plants-india',
    title: articles[0].title,
    metaDescription: articles[0].metaDescription,
    image: `${BASE_URL}${articles[0].heroImage.src}`,
    schemaType: 'Article',
    component: <ArticlePage article={articles[0]} />,
    publishedDate: articles[0].publishedDate,
    keywords: [articles[0].mainKeyword, ...articles[0].relatedKeywords]
  },
  {
    outputFilePath: 'start-balcony-garden/index.html',
    urlPath: '/start-balcony-garden',
    title: articles[1].title,
    metaDescription: articles[1].metaDescription,
    image: `${BASE_URL}${articles[1].heroImage.src}`,
    schemaType: 'Article',
    component: <ArticlePage article={articles[1]} />,
    publishedDate: articles[1].publishedDate,
    keywords: [articles[1].mainKeyword, ...articles[1].relatedKeywords]
  },
  {
    outputFilePath: 'water-plants-while-away/index.html',
    urlPath: '/water-plants-while-away',
    title: articles[2].title,
    metaDescription: articles[2].metaDescription,
    image: `${BASE_URL}${articles[2].heroImage.src}`,
    schemaType: 'Article',
    component: <ArticlePage article={articles[2]} />,
    publishedDate: articles[2].publishedDate,
    keywords: [articles[2].mainKeyword, ...articles[2].relatedKeywords]
  },
  {
    outputFilePath: '404.html',
    urlPath: '/404',
    title: 'Page Not Found - Balcony Gardening Guide | GreenNest',
    metaDescription: 'The requested balcony gardening guide could not be located. Browse the GreenNest homepage, best plants guide, beginner setup, or vacation watering advice.',
    image: `${BASE_URL}/images/balcony-garden-hero.svg`,
    schemaType: 'WebSite',
    component: <NotFoundPage />
  }
];

function buildHtml(page: PageConfig, renderedBody: string): string {
  const canonicalUrl = `${BASE_URL}${page.urlPath === '/' ? '/' : page.urlPath}`;

  const jsonLd = page.schemaType === 'Article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': page.title,
    'description': page.metaDescription,
    'image': [page.image],
    'datePublished': page.publishedDate || '2026-10-15',
    'dateModified': '2026-10-15',
    'author': {
      '@type': 'Organization',
      'name': 'GreenNest Editorial Team',
      'url': BASE_URL
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'GreenNest',
      'logo': {
        '@type': 'ImageObject',
        'url': `${BASE_URL}/images/balcony-garden-hero.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  } : {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'GreenNest',
    'url': BASE_URL,
    'description': page.metaDescription,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${BASE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.metaDescription}" />
    ${page.keywords ? `<meta name="keywords" content="${page.keywords.join(', ')}" />` : ''}
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Google Search Console Verification Meta Tag -->
    <meta name="google-site-verification" content="GSC-VERIFY-GREENNEST-BALCONY-INDIA-2026" />
    
    <!-- OpenGraph Social Sharing Metadata -->
    <meta property="og:type" content="${page.schemaType === 'Article' ? 'article' : 'website'}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.metaDescription}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="GreenNest" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    
    <!-- Twitter Social Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.metaDescription}" />
    <meta name="twitter:image" content="${page.image}" />

    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body>
    <div id="root">${renderedBody}</div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

async function run() {
  for (const page of pages) {
    const renderedBody = renderToString(page.component);
    const fullHtml = buildHtml(page, renderedBody);
    const dest = path.resolve(process.cwd(), page.outputFilePath);
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dest, fullHtml, 'utf-8');
    console.log(`Pre-rendered ${page.urlPath} -> ${page.outputFilePath} (${fullHtml.length} bytes)`);
  }
}

run();
