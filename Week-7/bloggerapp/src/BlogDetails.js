import React from 'react';

const BlogDetails = ({ blog }) => {
  // Method 5: Variable Assignment for Conditional Rendering
  let blogContent = null;
  
  if (blog) {
    blogContent = (
      <div style={{ 
        border: '2px solid #27ae60', 
        padding: '20px', 
        margin: '10px', 
        borderRadius: '8px',
        backgroundColor: '#d5f4e6'
      }}>
        <h2>📝 Blog Details</h2>
        
        <p><strong>Title:</strong> {blog.title}</p>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Category:</strong> {blog.category}</p>
        <p><strong>Published:</strong> {blog.publishDate}</p>
        
        {/* Method 6: Inline Function (IIFE) for complex logic */}
        {(() => {
          if (blog.tags && blog.tags.length > 0) {
            return (
              <div>
                <strong>Tags: </strong>
                {blog.tags.map((tag, index) => (
                  <span key={index} style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '4px 8px',
                    margin: '2px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            );
          }
          return null;
        })()}
        
        {/* Method 7: Multiple conditions with AND operator */}
        {blog.views > 1000 && blog.likes > 50 && (
          <p style={{color: '#e74c3c', fontWeight: 'bold'}}>
            🔥 This is a trending post!
          </p>
        )}
        
        {/* Method 8: Nested ternary operators */}
        <p><strong>Popularity:</strong> 
          {blog.views > 5000 ? 
            <span style={{color: '#e74c3c'}}> 🔥 Viral</span> :
            blog.views > 1000 ? 
              <span style={{color: '#f39c12'}}> ⭐ Popular</span> :
              <span style={{color: '#95a5a6'}}> 📖 New</span>
          }
        </p>
      </div>
    );
  } else {
    blogContent = (
      <div style={{ 
        border: '2px solid #95a5a6', 
        padding: '20px', 
        margin: '10px', 
        borderRadius: '8px',
        backgroundColor: '#ecf0f1'
      }}>
        <p>No blog data to display</p>
      </div>
    );
  }
  
  return blogContent;
};

export default BlogDetails;