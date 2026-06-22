# Nexalist AI

Nexalist AI is a high-end, professional landing page for an AI consultancy firm specializing in **Strategic Planning** and **Corporate Training**. The application is designed to communicate the value of AI implementation to C-suite executives and SMEs.

## ✨ Features

- **Modern Tech Dark Aesthetic:** Glassmorphism, gradient accents, and a deep navy color palette.
- **Responsive Design:** Optimized for all screen sizes.
- **Service Showcase:** Highlights Strategic Planning and Corporate Training services.
- **Roadmap:** Clear path for AI implementation.
- **Contact Integration:** Easy way for potential clients to reach out.

## 🛠️ Technologies

- **Framework:** [React 19](https://react.dev/) (TypeScript)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Styling:** Vanilla CSS (Custom Properties / CSS Variables)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nexalist-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build

To generate a production-ready bundle in the `dist/` directory:
```bash
npm run build
```

### Local Preview

To preview the production build locally:
```bash
npm run preview
```

## 🏗️ Architecture

The project follows a modular, component-based structure:
- `src/components/`: Reusable UI elements (Navbar, Footer, Logo).
- `src/sections/`: Main landing page sections (Hero, Benefits, Services, Roadmap, Contact).
- `src/styles/`: Centralized styling foundation (`variables.css` and `global.css`).
- `src/assets/`: Static assets and imagery.

## 🎨 Development Conventions

### Styling & Theme
- **Theme:** Always adhere to the "Modern Tech Dark" palette defined in `src/styles/variables.css`.
- **CSS Variables:** Use `--bg-primary`, `--accent-cyan`, etc., instead of hardcoding colors.
- **Glassmorphism:** Use the `.glass-card` class for container elements.
- **Typography:** Headlines should favor high-impact gradient text using the `.gradient-text` class.

### Components
- **TypeScript:** Functional components with proper prop typing.
- **Structure:** Each section or complex component has its own `.tsx` and `.css` file in the same directory.

### Icons
- Use the `lucide-react` library for consistent iconography.
- Default icon size for section headers: `40`.
- Default icon size for benefit cards: `32`.

## ✍️ Blog Publication Process

Follow these steps to add and publish a new blog post:

### 1. Create HTML Content
Create a standalone HTML file in the `public/` directory (e.g., `public/my-new-post.html`). The content of this post must use semantic tags, specifically starting with `<nav class="toc">` and ending with `</article>`.

### 2. Configure and Run the Import Script
Open `add_blog_post.py` and update the metadata inside the script:
* **`html_path`**: Absolute path to your new HTML file.
* **`id`**: Next sequential ID string (e.g., `'4'`).
* **`slug`**: URL-friendly slug matching your post.
* **`title`**: Full title of the blog post.
* **`excerpt`**: Short summary of the post (usually from the meta description).
* **`datePublished`**: Date formatted as `YYYY-MM-DD`.
* **`category`**: Category tag.
* **`readTime`**: Estimated reading time (e.g., `'10 min read'`).
* **`image`**: An Unsplash or absolute image URL for the thumbnail.

Execute the python script to append it to `src/data/blogPosts.ts`:
```bash
python3 add_blog_post.py
```

### 3. Register with the Pre-renderer
Open `prerender.js` and add your new post metadata to the `blogPosts` array:
```javascript
{
  slug: 'my-new-post',
  title: 'Post Title',
  excerpt: 'Short description.',
  author: 'Nexalist Editorial',
  datePublished: '2026-06-22',
  category: 'Category',
  image: 'Cover image URL',
  content: `<div class="post-content-html"><h1>Post Title</h1><p>Short description.</p></div>`
}
```

### 4. Update the Sitemap
Open `public/sitemap.xml` and insert a new `<url>` block for your post:
```xml
<url>
  <loc>https://nexalistai.com/blog/my-new-post</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
  <image:image>
    <image:loc>https://images.unsplash.com/photo-...</image:loc>
    <image:title>Post Title</image:title>
  </image:image>
</url>
```
*Note: Make sure to XML-escape characters like `&` as `&amp;` in the image URL.* Also, update the `<lastmod>` date for the homepage and listing pages to the current date.

### 5. Build and Verify
Run the production build:
```bash
npm run build
```
This compile process runs `vite build`, copies the sitemap, and executes `prerender.js` to output static pages in `dist/blog/[slug]/index.html` for SEO optimization.

