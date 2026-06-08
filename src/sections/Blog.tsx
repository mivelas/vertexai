import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="blog">
      <Helmet>
        <title>AI Insights | Strategic AI Strategy & Training | Nexalist AI</title>
        <meta name="description" content="Explore deep-dive articles on AI strategy, corporate training, and industry trends from the experts at Nexalist AI." />
        <meta property="og:title" content="AI Insights | Strategic AI Strategy & Training | Nexalist AI" />
        <meta property="og:description" content="Explore deep-dive articles on AI strategy, corporate training, and industry trends." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">AI Insights</h2>
          <p>Strategic perspectives on the future of enterprise intelligence and corporate transformation.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card glass-card" onClick={() => navigate(`/blog/${post.id}`)}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Clock size={14} /> {post.readTime}</span>
                  <span><Calendar size={14} /> {post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-author"><User size={14} /> {post.author}</span>
                  <button className="read-more">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
