import React from 'react';

const CourseDetails = ({ course }) => {
  // Method 9: Switch Statement for Conditional Rendering
  const renderDifficultyLevel = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return <span style={{color: '#27ae60', fontWeight: 'bold'}}>🟢 Beginner</span>;
      case 'Intermediate':
        return <span style={{color: '#f39c12', fontWeight: 'bold'}}>🟡 Intermediate</span>;
      case 'Advanced':
        return <span style={{color: '#e74c3c', fontWeight: 'bold'}}>🔴 Advanced</span>;
      default:
        return <span style={{color: '#95a5a6'}}>❓ Unknown</span>;
    }
  };

  // Method 10: Object-based conditional rendering
  const priceDisplay = {
    free: (price) => <span style={{color: '#27ae60'}}>🆓 Free</span>,
    cheap: (price) => <span style={{color: '#3498db'}}>💰 ${price}</span>,
    expensive: (price) => <span style={{color: '#e74c3c'}}>💎 ${price}</span>
  };

  const getPriceComponent = (price) => {
    if (price === 0) return priceDisplay.free(price);
    if (price < 50) return priceDisplay.cheap(price);
    return priceDisplay.expensive(price);
  };

  return (
    <>
      {/* Method 11: React Fragment with conditional rendering */}
      {course ? (
        <div style={{ 
          border: '2px solid #9b59b6', 
          padding: '20px', 
          margin: '10px', 
          borderRadius: '8px',
          backgroundColor: '#f4ecf7'
        }}>
          <h2>🎓 Course Details</h2>
          
          <p><strong>Course:</strong> {course.title}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Difficulty:</strong> {renderDifficultyLevel(course.difficulty)}</p>
          <p><strong>Price:</strong> {getPriceComponent(course.price)}</p>
          
          {/* Method 12: Conditional rendering with map function */}
          {course.features && course.features.length > 0 && (
            <div>
              <strong>Features:</strong>
              <ul>
                {course.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Method 13: Short-circuit evaluation with function call */}
          {course.students && course.students > 100 && (
            <p style={{color: '#2ecc71', fontWeight: 'bold'}}>
              👥 Popular Course! ({course.students} students enrolled)
            </p>
          )}
          
        </div>
      ) : (
        <div style={{ 
          border: '2px solid #95a5a6', 
          padding: '20px', 
          margin: '10px', 
          borderRadius: '8px',
          backgroundColor: '#ecf0f1'
        }}>
          <p>No course information available</p>
        </div>
      )}
    </>
  );
};

export default CourseDetails;