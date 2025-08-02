import React, { useState } from 'react';

const GuestPage = ({ onLogin }) => {
  const flightDetails = [
    {
      id: 1,
      flightNumber: "AI 101",
      airline: "Air India",
      from: "Delhi",
      to: "Mumbai",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      price: "₹8,500",
      duration: "2h 30m"
    },
    {
      id: 2,
      flightNumber: "SG 205",
      airline: "SpiceJet",
      from: "Bangalore",
      to: "Chennai",
      departure: "02:15 PM",
      arrival: "03:45 PM",
      price: "₹4,200",
      duration: "1h 30m"
    },
    {
      id: 3,
      flightNumber: "6E 789",
      airline: "IndiGo",
      from: "Kolkata",
      to: "Hyderabad",
      departure: "06:30 PM",
      arrival: "08:45 PM",
      price: "₹6,800",
      duration: "2h 15m"
    },
    {
      id: 4,
      flightNumber: "UK 456",
      airline: "Vistara",
      from: "Mumbai",
      to: "Goa",
      departure: "11:20 AM",
      arrival: "12:50 PM",
      price: "₹5,500",
      duration: "1h 30m"
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Flight Booking Portal</h1>
        <p style={styles.subtitle}>Browse Available Flights</p>
        <button 
          onClick={onLogin}
          style={styles.loginButton}
        >
          Login to Book Tickets
        </button>
      </div>

      <div style={styles.guestContent}>
        <h2 style={styles.sectionTitle}>Available Flights</h2>
        <p style={styles.guestMessage}>
          You are browsing as a <strong>Guest</strong>. Login to book tickets.
        </p>
        
        <div style={styles.flightsGrid}>
          {flightDetails.map((flight) => (
            <div key={flight.id} style={styles.flightCard}>
              <div style={styles.flightHeader}>
                <h3 style={styles.flightNumber}>{flight.flightNumber}</h3>
                <span style={styles.airline}>{flight.airline}</span>
              </div>
              
              <div style={styles.flightRoute}>
                <div style={styles.routeInfo}>
                  <span style={styles.city}>{flight.from}</span>
                  <span style={styles.time}>{flight.departure}</span>
                </div>
                <div style={styles.arrow}>✈️</div>
                <div style={styles.routeInfo}>
                  <span style={styles.city}>{flight.to}</span>
                  <span style={styles.time}>{flight.arrival}</span>
                </div>
              </div>
              
              <div style={styles.flightDetails}>
                <span style={styles.duration}>Duration: {flight.duration}</span>
                <span style={styles.price}>{flight.price}</span>
              </div>
              
              <button 
                style={styles.disabledButton}
                disabled
              >
                Login Required to Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UserPage = ({ onLogout, username }) => {
  const [bookedFlights, setBookedFlights] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const availableFlights = [
    {
      id: 1,
      flightNumber: "AI 101",
      airline: "Air India",
      from: "Delhi",
      to: "Mumbai",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      price: "₹8,500",
      duration: "2h 30m"
    },
    {
      id: 2,
      flightNumber: "SG 205",
      airline: "SpiceJet",
      from: "Bangalore",
      to: "Chennai",
      departure: "02:15 PM",
      arrival: "03:45 PM",
      price: "₹4,200",
      duration: "1h 30m"
    },
    {
      id: 3,
      flightNumber: "6E 789",
      airline: "IndiGo",
      from: "Kolkata",
      to: "Hyderabad",
      departure: "06:30 PM",
      arrival: "08:45 PM",
      price: "₹6,800",
      duration: "2h 15m"
    }
  ];

  const handleBookFlight = (flight) => {
    const booking = {
      ...flight,
      bookingId: `BK${Date.now()}`,
      bookingDate: new Date().toLocaleDateString(),
      passengerName: username
    };
    setBookedFlights([...bookedFlights, booking]);
    alert(`Flight ${flight.flightNumber} booked successfully!`);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome, {username}!</h1>
        <p style={styles.subtitle}>Book Your Flight Tickets</p>
        <button 
          onClick={onLogout}
          style={styles.logoutButton}
        >
          Logout
        </button>
      </div>

      <div style={styles.userContent}>
        <div style={styles.tabContainer}>
          <button 
            onClick={() => setShowBookingForm(false)}
            style={!showBookingForm ? styles.activeTab : styles.tab}
          >
            Available Flights
          </button>
          <button 
            onClick={() => setShowBookingForm(true)}
            style={showBookingForm ? styles.activeTab : styles.tab}
          >
            My Bookings ({bookedFlights.length})
          </button>
        </div>

        {!showBookingForm ? (
          <div style={styles.flightsSection}>
            <h2 style={styles.sectionTitle}>Book Your Flight</h2>
            <div style={styles.flightsGrid}>
              {availableFlights.map((flight) => (
                <div key={flight.id} style={styles.flightCard}>
                  <div style={styles.flightHeader}>
                    <h3 style={styles.flightNumber}>{flight.flightNumber}</h3>
                    <span style={styles.airline}>{flight.airline}</span>
                  </div>
                  
                  <div style={styles.flightRoute}>
                    <div style={styles.routeInfo}>
                      <span style={styles.city}>{flight.from}</span>
                      <span style={styles.time}>{flight.departure}</span>
                    </div>
                    <div style={styles.arrow}>✈️</div>
                    <div style={styles.routeInfo}>
                      <span style={styles.city}>{flight.to}</span>
                      <span style={styles.time}>{flight.arrival}</span>
                    </div>
                  </div>
                  
                  <div style={styles.flightDetails}>
                    <span style={styles.duration}>Duration: {flight.duration}</span>
                    <span style={styles.price}>{flight.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleBookFlight(flight)}
                    style={styles.bookButton}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.bookingsSection}>
            <h2 style={styles.sectionTitle}>My Bookings</h2>
            {bookedFlights.length === 0 ? (
              <div style={styles.emptyBookings}>
                <p>No bookings yet. Book a flight to see your bookings here!</p>
              </div>
            ) : (
              <div style={styles.bookingsGrid}>
                {bookedFlights.map((booking) => (
                  <div key={booking.bookingId} style={styles.bookingCard}>
                    <div style={styles.bookingHeader}>
                      <h3>Booking ID: {booking.bookingId}</h3>
                      <span style={styles.bookingDate}>Booked on: {booking.bookingDate}</span>
                    </div>
                    <div style={styles.bookingDetails}>
                      <p><strong>Flight:</strong> {booking.flightNumber} - {booking.airline}</p>
                      <p><strong>Route:</strong> {booking.from} → {booking.to}</p>
                      <p><strong>Time:</strong> {booking.departure} - {booking.arrival}</p>
                      <p><strong>Price:</strong> {booking.price}</p>
                      <p><strong>Passenger:</strong> {booking.passengerName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '30px'
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '1.2rem',
    marginBottom: '20px'
  },
  loginButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  guestContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  userContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    color: '#2c3e50',
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center'
  },
  guestMessage: {
    textAlign: 'center',
    backgroundColor: '#fff3cd',
    color: '#856404',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '30px',
    border: '1px solid #ffeaa7'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    gap: '10px'
  },
  tab: {
    padding: '12px 24px',
    border: '2px solid #bdc3c7',
    backgroundColor: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#7f8c8d'
  },
  activeTab: {
    padding: '12px 24px',
    border: '2px solid #3498db',
    backgroundColor: '#3498db',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  },
  flightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '20px'
  },
  flightCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #e9ecef',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  flightHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  flightNumber: {
    color: '#2c3e50',
    fontSize: '1.3rem',
    margin: 0
  },
  airline: {
    color: '#7f8c8d',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  flightRoute: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  routeInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  city: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  time: {
    fontSize: '0.9rem',
    color: '#7f8c8d'
  },
  arrow: {
    fontSize: '1.5rem',
    margin: '0 15px'
  },
  flightDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  duration: {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  price: {
    color: '#27ae60',
    fontSize: '1.3rem',
    fontWeight: 'bold'
  },
  bookButton: {
    width: '100%',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  disabledButton: {
    width: '100%',
    backgroundColor: '#bdc3c7',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'not-allowed'
  },
  flightsSection: {
    marginTop: '20px'
  },
  bookingsSection: {
    marginTop: '20px'
  },
  emptyBookings: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '12px',
    color: '#7f8c8d'
  },
  bookingsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px'
  },
  bookingCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '2px solid #27ae60'
  },
  bookingHeader: {
    borderBottom: '1px solid #e9ecef',
    paddingBottom: '10px',
    marginBottom: '15px'
  },
  bookingDate: {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  bookingDetails: {
    lineHeight: '1.6'
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('John Doe');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let currentPage;
  
  if (isLoggedIn) {
    currentPage = (
      <UserPage 
        onLogout={handleLogout} 
        username={username}
      />
    );
  } else {
    currentPage = (
      <GuestPage 
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div>
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: isLoggedIn ? '#27ae60' : '#e74c3c',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 1000
      }}>
        Status: {isLoggedIn ? 'Logged In' : 'Guest'}
      </div>

      {currentPage}

    </div>
  );
};

export default App;