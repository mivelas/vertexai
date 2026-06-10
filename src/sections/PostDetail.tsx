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

  return (
    <div className="post-detail blog-post-template">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
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
