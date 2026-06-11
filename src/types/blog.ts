export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // This will now hold the full body HTML
  author: string;
  date: string;
  datePublished: string; // ISO 8601 for structured data e.g. '2026-06-01'
  category: string;
  readTime: string;
  image: string;
  slug: string;
}
