import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../types/blog';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === id);

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
    <div className="post-detail">
      <Helmet>
        <title>{post.title} | AI Insights | Nexalist AI</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container">
        <button className="back-button" onClick={() => navigate('/blog')}>
          <ArrowLeft size={20} /> Back to Insights
        </button>

        <article className="post-article">
          <header className="post-header">
            <span className="post-category">{post.category}</span>
            <h1 className="gradient-text">{post.title}</h1>
            <div className="post-meta-large">
              <div className="meta-item">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="meta-item">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="post-hero-image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="post-content-wrapper">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            <aside className="post-sidebar">
              <div className="sidebar-card glass-card">
                <h3>Share this Insight</h3>
                <div className="share-buttons">
                  <button className="share-btn"><Share2 size={18} /> LinkedIn</button>
                  <button className="share-btn"><Share2 size={18} /> Twitter</button>
                </div>
              </div>
              <div className="sidebar-card glass-card">
                <h3>Subscribe</h3>
                <p>Get the latest AI strategic insights delivered to your inbox.</p>
                <input type="email" placeholder="email@company.com" className="sidebar-input" />
                <button className="cta-button-small">Subscribe</button>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;

