import React, { useState } from 'react';
import './AdminBlog.css';
import Animation from '../components/Animation';

const AdminBlog = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'technology',
    tags: '',
    featuredImage: '',
    status: 'draft'
  });

  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Blog post saved successfully!');
      // Reset form
      setBlogPost({
        title: '',
        content: '',
        excerpt: '',
        category: 'technology',
        tags: '',
        featuredImage: '',
        status: 'draft'
      });
    }, 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate image upload
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogPost(prev => ({
          ...prev,
          featuredImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    'technology', 'web-development', 'react', 'javascript', 'nodejs', 'api', 'casino-tech'
  ];

  return (
    <section className="admin-blog">
      <div className="admin-blog-container">
        {/* Header */}
        <Animation type="fade" delay={0.2}>
          <div className="admin-blog-header">
            <h1>Blog Editor</h1>
            <p>Create and manage your blog posts</p>
          </div>
        </Animation>

        <div className="blog-editor-layout">
          {/* Editor Side */}
          <div className="editor-side">
            <Animation type="slide" direction="right" delay={0.4}>
              <form className="blog-form" onSubmit={handleSubmit}>
                {/* Basic Info */}
                <div className="form-section">
                  <h3>Basic Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="title">Blog Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={blogPost.title}
                      onChange={handleChange}
                      placeholder="Enter a compelling title..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="excerpt">Excerpt</label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={blogPost.excerpt}
                      onChange={handleChange}
                      placeholder="Brief description of your blog post..."
                      rows="3"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <select
                        id="category"
                        name="category"
                        value={blogPost.category}
                        onChange={handleChange}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <select
                        id="status"
                        name="status"
                        value={blogPost.status}
                        onChange={handleChange}
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={blogPost.tags}
                      onChange={handleChange}
                      placeholder="react, javascript, api, casino..."
                    />
                    <small>Separate tags with commas</small>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="form-section">
                  <h3>Featured Image</h3>
                  <div className="image-upload-area">
                    {blogPost.featuredImage ? (
                      <div className="image-preview">
                        <img src={blogPost.featuredImage} alt="Featured" />
                        <button 
                          type="button"
                          className="remove-image"
                          onClick={() => setBlogPost(prev => ({ ...prev, featuredImage: '' }))}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="upload-placeholder">
                        <input
                          type="file"
                          id="featuredImage"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="file-input"
                        />
                        <label htmlFor="featuredImage" className="upload-label">
                          <span className="upload-icon">📷</span>
                          <span>Upload Featured Image</span>
                          <small>Recommended: 1200x630px</small>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Editor */}
                <div className="form-section">
                  <h3>Content</h3>
                  <div className="content-editor">
                    <div className="editor-toolbar">
                      <button type="button" className="toolbar-btn">B</button>
                      <button type="button" className="toolbar-btn">I</button>
                      <button type="button" className="toolbar-btn">U</button>
                      <button type="button" className="toolbar-btn">🔗</button>
                      <button type="button" className="toolbar-btn">📷</button>
                      <button type="button" className="toolbar-btn">👁️</button>
                    </div>
                    <textarea
                      name="content"
                      value={blogPost.content}
                      onChange={handleChange}
                      placeholder="Start writing your amazing blog post here..."
                      rows="15"
                      className="content-textarea"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setIsPreview(!isPreview)}
                  >
                    {isPreview ? 'Edit' : 'Preview'}
                  </button>
                  
                  <div className="action-buttons">
                    <button type="button" className="btn btn-outline">
                      Save Draft
                    </button>
                    <button 
                      type="submit" 
                      className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Publishing...' : 'Publish Post'}
                    </button>
                  </div>
                </div>
              </form>
            </Animation>
          </div>

          {/* Preview Side */}
          <div className={`preview-side ${isPreview ? 'active' : ''}`}>
            <Animation type="slide" direction="left" delay={0.6}>
              <div className="preview-container">
                <h3>Live Preview</h3>
                
                {blogPost.title || blogPost.content ? (
                  <div className="blog-preview">
                    {blogPost.featuredImage && (
                      <img src={blogPost.featuredImage} alt="Featured" className="preview-image" />
                    )}
                    
                    <div className="preview-content">
                      <h2 className="preview-title">{blogPost.title || 'Your Blog Title'}</h2>
                      
                      <div className="preview-meta">
                        <span className="category">{blogPost.category}</span>
                        <span className="date">{new Date().toLocaleDateString()}</span>
                        <span className="status">{blogPost.status}</span>
                      </div>

                      {blogPost.excerpt && (
                        <p className="preview-excerpt">{blogPost.excerpt}</p>
                      )}

                      <div className="preview-body">
                        {blogPost.content ? (
                          <div className="content-preview">
                            {blogPost.content.split('\n').map((paragraph, index) => (
                              paragraph && <p key={index}>{paragraph}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="placeholder-text">
                            Your blog content will appear here...
                          </p>
                        )}
                      </div>

                      {blogPost.tags && (
                        <div className="preview-tags">
                          {blogPost.tags.split(',').map((tag, index) => (
                            <span key={index} className="tag">#{tag.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="empty-preview">
                    <span className="empty-icon">📝</span>
                    <p>Start writing to see the preview</p>
                  </div>
                )}
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlog;