import React from 'react';

const BookDetails = ({ book }) => {
  // Method 1: Early Return (Guard Clause)
  if (!book) {
    return <div>No book data available</div>;
  }

  return (
    <div style={{ 
      border: '2px solid #3498db', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: '#ecf0f1'
    }}>
      <h2>📚 Book Details</h2>
      
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      
      {/* Method 2: Logical AND operator */}
      {book.rating && (
        <p><strong>Rating:</strong> {'⭐'.repeat(book.rating)} ({book.rating}/5)</p>
      )}
      
      {/* Method 3: Ternary Operator */}
      <p><strong>Status:</strong> 
        {book.isAvailable ? 
          <span style={{color: 'green'}}> ✅ Available</span> : 
          <span style={{color: 'red'}}> ❌ Not Available</span>
        }
      </p>
      
      {/* Method 4: Conditional rendering with multiple conditions */}
      {book.price && book.price > 0 && (
        <p><strong>Price:</strong> ${book.price}</p>
      )}
    </div>
  );
};

export default BookDetails;