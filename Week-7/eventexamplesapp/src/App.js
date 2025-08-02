import React, { useState } from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
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
    fontWeight: 'bold'
  },
  section: {
    backgroundColor: 'white',
    padding: '25px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    border: '1px solid #ddd'
  },
  sectionTitle: {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px'
  },
  counterDisplay: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    margin: '20px 0',
    padding: '15px',
    backgroundColor: '#ecf0f1',
    borderRadius: '8px'
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '140px'
  },
  incrementButton: {
    backgroundColor: '#27ae60',
    color: 'white'
  },
  decrementButton: {
    backgroundColor: '#e74c3c',
    color: 'white'
  },
  welcomeButton: {
    backgroundColor: '#3498db',
    color: 'white'
  },
  syntheticButton: {
    backgroundColor: '#9b59b6',
    color: 'white'
  },
  convertButton: {
    backgroundColor: '#f39c12',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  message: {
    backgroundColor: '#d5f4e6',
    color: '#155724',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'center',
    fontWeight: 'bold',
    border: '1px solid #c3e6cb'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '8px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #bdc3c7',
    borderRadius: '6px',
    marginTop: '5px'
  },
  result: {
    backgroundColor: '#e8f5e8',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'center',
    color: '#2c3e50',
    border: '2px solid #27ae60'
  },
  conceptsSection: {
    backgroundColor: '#fff3cd',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #ffeaa7'
  },
  conceptsList: {
    lineHeight: '1.8',
    color: '#555'
  }
};

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const rupeesValue = parseFloat(rupees);
    if (!isNaN(rupeesValue) && rupeesValue > 0) {
      const euroValue = (rupeesValue / 90).toFixed(2);
      setEuros(euroValue);
    } else {
      alert('Please enter a valid number greater than 0');
    }
  };

  const handleInputChange = (e) => {
    setRupees(e.target.value);
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>4. Currency Converter Component</h2>
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Indian Rupees:
            <input
              type="number"
              value={rupees}
              onChange={handleInputChange}
              placeholder="Enter amount in Rupees"
              style={styles.input}
            />
          </label>
        </div>
        
        <button 
          type="button" 
          onClick={handleSubmit}
          style={styles.convertButton}
        >
          Convert to Euro
        </button>
        
        {euros && (
          <div style={styles.result}>
            <h3>Result: ₹{rupees} = €{euros}</h3>
          </div>
        )}
      </div>
      <p><strong>Note:</strong> Conversion rate: 1 Euro = 90 Rupees (approximate)</p>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  const incrementValue = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const sayHello = () => {
    setMessage('Hello! Counter was incremented!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleIncrement = () => {
    incrementValue();
    
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
    setMessage('Counter decremented!');
    setTimeout(() => setMessage(''), 3000);
  };

  const sayWelcome = (welcomeMsg) => {
    setMessage(`${welcomeMsg}! Thank you for using our app!`);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleOnPress = (e) => {
    console.log('Synthetic Event Object:', e);
    console.log('Event Type:', e.type);
    console.log('Target Element:', e.target);
    
    setMessage('I was clicked - Synthetic Event Triggered!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      {/* Main Header */}
      <h1 style={styles.header}>
        Event Examples App
      </h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Counter with Multiple Event Handlers</h2>
        
        <div style={styles.counterDisplay}>
          Counter Value: {counter}
        </div>
        
        <div style={styles.buttonContainer}>
          <button 
            style={{...styles.button, ...styles.incrementButton}}
            onClick={handleIncrement}
          >
            Increment
          </button>
          
          <button 
            style={{...styles.button, ...styles.decrementButton}}
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
        
        <p><strong>Note:</strong> Increment button calls multiple methods: incrementValue() and sayHello()</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>2. Event Handler with Arguments</h2>
        
        <div style={styles.buttonContainer}>
          <button 
            style={{...styles.button, ...styles.welcomeButton}}
            onClick={() => sayWelcome('Welcome')}
          >
            Say Welcome
          </button>
        </div>
        
        <p><strong>Note:</strong> This button invokes a function with "welcome" as an argument</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Synthetic Event Handler</h2>
        
        <div style={styles.buttonContainer}>
          <button 
            style={{...styles.button, ...styles.syntheticButton}}
            onClick={handleOnPress}
          >
            OnPress (Synthetic Event)
          </button>
        </div>
        
        <p><strong>Note:</strong> Check browser console for synthetic event details when clicked</p>
      </div>

      {message && (
        <div style={styles.message}>
          {message}
        </div>
      )}

      <CurrencyConverter />

    </div>
  );
};

export default App;