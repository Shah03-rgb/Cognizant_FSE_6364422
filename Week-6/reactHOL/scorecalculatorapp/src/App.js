import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Student Score Calculator</h1>


      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
