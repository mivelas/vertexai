import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the original index.html template from dist
const templatePath = path.join(__dirname, 'dist', 'index.html');
const templateHTML = fs.readFileSync(templatePath, 'utf-8');

// A hardcoded array since we can't easily import TS files without ts-node
const blogPosts = [
  {
    slug: 'best-ai-tools-solo-founders-2026',
    title: 'Best AI Tools for Solo Founders in 2026',
    excerpt: 'The definitive guide to AI tools that help solo founders operate like a full team — covering writing, building, automation, and customer support.',
    author: 'Nexalist Editorial',
    datePublished: '2026-06-01',
    category: 'AI Tools Guide',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    content: `<div class="post-content-html"><h1>Best AI Tools for Solo Founders in 2026</h1><p>The definitive guide to AI tools that help solo founders operate like a full team.</p></div>`
  }
];

// Helper to inject SEO tags and content
function prerenderPost(post) {
  const postUrl = `https://nexalistai.com/blog/${post.slug}`;
  let html = templateHTML;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${post.title} | Nexalist AI</title>`);
  
  // Inject SEO Meta tags in head
  const seoTags = `
    <meta name="description" content="${post.excerpt}" />
    <meta name="author" content="${post.author}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${postUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${postUrl}" />
    <meta property="og:title" content="${post.title}" />
    <meta property="og:description" content="${post.excerpt}" />
    <meta property="og:image" content="${post.image}" />
    <meta property="og:site_name" content="Nexalist AI" />
    <meta property="article:published_time" content="${post.datePublished}" />
    <meta property="article:author" content="${post.author}" />
    <meta property="article:section" content="${post.category}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${post.title}" />
    <meta name="twitter:description" content="${post.excerpt}" />
    <meta name="twitter:image" content="${post.image}" />
  `;
  html = html.replace('</head>', `${seoTags}</head>`);

  // Inject article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.datePublished,
    author: { '@type': 'Person', name: post.author, url: 'https://nexalistai.com' },
    publisher: { '@type': 'Organization', name: 'Nexalist AI', logo: { '@type': 'ImageObject', url: 'https://nexalistai.com/favicon.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
  };
  html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script></head>`);

  // Inject actual content into root so Googlebot sees the content immediately
  const rootContent = `<div class="post-detail blog-post-template"><header className="blog-hero"><h1>${post.title}</h1></header><div className="container">${post.content}</div></div>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${rootContent}</div>`);

  // Save the file
  const outDir = path.join(__dirname, 'dist', 'blog', post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered: /blog/${post.slug}`);
}

blogPosts.forEach(prerenderPost);
