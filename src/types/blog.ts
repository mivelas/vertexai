export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // This will now hold the full body HTML
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}
