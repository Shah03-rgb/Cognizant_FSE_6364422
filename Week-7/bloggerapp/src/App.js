import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  // State for controlling which component to show
  const [selectedComponent, setSelectedComponent] = useState('book');
  const [showAll, setShowAll] = useState(false);

  const sampleData = {
    book: {
      title: "Advanced React Patterns",
      author: "Sarah Developer",
      genre: "Technology",
      pages: 450,
      rating: 5,
      isAvailable: true,
      price: 39.99
    },
    blog: {
      title: "Understanding React Hooks",
      author: "Mike Blogger",
      category: "Web Development",
      publishDate: "2024-01-20",
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
      views: 2500,
      likes: 120
    },
    course: {
      title: "Complete React Bootcamp",
      instructor: "Emma Teacher",
      duration: "50 hours",
      difficulty: "Intermediate",
      price: 79,
      students: 1250,
      features: [
        "Video Lectures",
        "Hands-on Projects", 
        "Code Reviews",
        "Certificate of Completion",
        "Lifetime Access"
      ]
    }
  };

  return (
    <div className="App" style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{textAlign: 'center', color: '#2c3e50'}}>
        🚀 BloggerApp
      </h1>
      
      {/* Control Panel */}
      <div style={{
        backgroundColor: '#34495e',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h2>Select Component</h2>
        
        <div style={{marginBottom: '15px'}}>
          <button 
            onClick={() => setSelectedComponent('book')}
            style={{
              backgroundColor: selectedComponent === 'book' ? '#3498db' : '#7f8c8d',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Book Details
          </button>
          
          <button 
            onClick={() => setSelectedComponent('blog')}
            style={{
              backgroundColor: selectedComponent === 'blog' ? '#27ae60' : '#7f8c8d',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Blog Details
          </button>
          
          <button 
            onClick={() => setSelectedComponent('course')}
            style={{
              backgroundColor: selectedComponent === 'course' ? '#9b59b6' : '#7f8c8d',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Course Details
          </button>
        </div>

        <label style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <input
            type="checkbox"
            checked={showAll}
            onChange={(e) => setShowAll(e.target.checked)}
            style={{transform: 'scale(1.2)'}}
          />
          <span>Show All Components</span>
        </label>
      </div>

      
      <div>
        {showAll ? (
          <div>
            <BookDetails book={sampleData.book} />
            <BlogDetails blog={sampleData.blog} />
            <CourseDetails course={sampleData.course} />
          </div>
        ) : (
          <div>
            {selectedComponent === 'book' && <BookDetails book={sampleData.book} />}
            {selectedComponent === 'blog' && <BlogDetails blog={sampleData.blog} />}
            {selectedComponent === 'course' && <CourseDetails course={sampleData.course} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;