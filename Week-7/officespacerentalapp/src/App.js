import React from 'react';

const App = () => {
  const office = {
    name: "Modern Tech Hub",
    rent: 75000,
    address: "123 Business District, Downtown"
  };

  const officeSpaces = [
    {
      id: 1,
      name: "Modern Tech Hub",
      rent: 75000,
      address: "123 Business District, Downtown",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Creative Workspace",
      rent: 45000,
      address: "456 Innovation Street, Tech Park",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Executive Suite",
      rent: 95000,
      address: "789 Corporate Avenue, Financial District",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Startup Incubator",
      rent: 35000,
      address: "321 Entrepreneur Lane, Silicon Valley",
      image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "Premium Office Complex",
      rent: 85000,
      address: "654 Luxury Plaza, Business Center",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "Co-working Space",
      rent: 25000,
      address: "987 Collaborative Court, Innovation Hub",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop"
    }
  ];

  const getRentColor = (rent) => {
    return rent < 60000 ? 'red' : 'green';
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '30px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    },
    singleOffice: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginBottom: '30px',
      border: '1px solid #ddd'
    },
    singleOfficeTitle: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '15px',
      borderBottom: '2px solid #3498db',
      paddingBottom: '10px'
    },
    officeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    officeCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #e0e0e0'
    },
    officeCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
    },
    officeImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderBottom: '3px solid #3498db'
    },
    officeContent: {
      padding: '20px'
    },
    officeName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    officeRent: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    officeAddress: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.4',
      fontStyle: 'italic'
    },
    listTitle: {
      fontSize: '2rem',
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '20px',
      borderBottom: '3px solid #3498db',
      paddingBottom: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Office Space Rental Application
      </h1>

      <div style={styles.singleOffice}>
        <h2 style={styles.singleOfficeTitle}>Featured Office Space</h2>
        <div style={styles.officeContent}>
          <h3 style={styles.officeName}>{office.name}</h3>
          <p style={{
            ...styles.officeRent,
            color: getRentColor(office.rent)
          }}>
            Rent: ₹{office.rent.toLocaleString()}/month
          </p>
          <p style={styles.officeAddress}>Address: {office.address}</p>
        </div>
      </div>

      <h2 style={styles.listTitle}>Available Office Spaces</h2>
      
      <div style={styles.officeGrid}>
        {officeSpaces.map((space) => (
          <div 
            key={space.id} 
            style={styles.officeCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
            }}
          >
            <img 
              src={space.image} 
              alt={space.name}
              style={styles.officeImage}
            />
            
            <div style={styles.officeContent}>
              <h3 style={styles.officeName}>{space.name}</h3>
              
              <p style={{
                ...styles.officeRent,
                color: getRentColor(space.rent)
              }}>
                Rent: ₹{space.rent.toLocaleString()}/month
              </p>
              
              <p style={styles.officeAddress}>
                <strong>Address:</strong> {space.address}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default App;