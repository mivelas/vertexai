import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === id || p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="post-detail">
        <div className="container">
          <h2 className="gradient-text">Post not found</h2>
          <button className="back-button" onClick={() => navigate('/blog')}>
            <ArrowLeft size={20} /> Back to Insights
          </button>
        </div>
      </div>
    );
  }

  const BASE_URL = 'https://nexalistai.com';
  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexalist AI',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <div className="post-detail blog-post-template">
      <Helmet>
        {/* Core */}
        <title>{post.title} | Nexalist AI</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />

        {/* Canonical — prevents duplicate-content from SPA routing */}
        <link rel="canonical" href={postUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:site_name" content="Nexalist AI" />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={post.readTime} />
        <meta name="twitter:label2" content="Category" />
        <meta name="twitter:data2" content={post.category} />

        {/* JSON-LD Article Schema — enables Google rich results */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>


      <header className="blog-hero">
        <span className="hero-eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="hero-sub">{post.excerpt}</p>
        <div className="hero-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
      </header>

      <div className="container">
        <button className="back-button" onClick={() => navigate('/blog')}>
          <ArrowLeft size={20} /> Back to Insights
        </button>

        <div className="post-content-html" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetail;
