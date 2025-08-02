import React, { useState } from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 65 },
    { name: "Hardik Pandya", score: 78 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Ravindra Jadeja", score: 45 },
    { name: "Bhuvneshwar Kumar", score: 30 },
    { name: "Jasprit Bumrah", score: 15 },
    { name: "Mohammed Shami", score: 25 },
    { name: "Yuzvendra Chahal", score: 20 },
    { name: "Shikhar Dhawan", score: 88 }
  ];

  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div style={{padding: '20px', border: '1px solid #ccc', margin: '10px'}}>
      <h2 style={{color: 'blue'}}>List of Players</h2>
      
      <h3>All Players (using map()):</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
        {players.map((player, index) => (
          <div key={index} style={{backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px'}}>
            <strong>{player.name}</strong> - Score: {player.score}
          </div>
        ))}
      </div>

      <h3>Players with scores below 70 (using arrow functions):</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
        {lowScorePlayers.map((player, index) => (
          <div key={index} style={{backgroundColor: '#ffebee', padding: '10px', borderRadius: '5px', borderLeft: '4px solid red'}}>
            <strong>{player.name}</strong> - Score: {player.score}
          </div>
        ))}
      </div>
    </div>
  );
};

const IndianPlayers = () => {
  const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"];
  const RanjiTrophyPlayers = ["Prithvi Shaw", "Devdutt Padikkal", "Sarfaraz Khan", "Rinku Singh"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];
  
  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = mergedPlayers;
  const oddTeamPlayers = [first, third, fifth, seventh].filter(player => player);
  const evenTeamPlayers = [second, fourth, sixth, eighth].filter(player => player);

  return (
    <div style={{padding: '20px', border: '1px solid #ccc', margin: '10px'}}>
      <h2 style={{color: 'green'}}>Indian Players</h2>
      
      <div style={{backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px', marginBottom: '20px'}}>
        <h3>Merged Players (using spread operator):</h3>
        <p><strong>T20 Players:</strong> {T20players.join(", ")}</p>
        <p><strong>Ranji Trophy Players:</strong> {RanjiTrophyPlayers.join(", ")}</p>
        <p><strong>Merged:</strong> {mergedPlayers.join(", ")}</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        <div>
          <h3>Odd Team Players (using Destructuring):</h3>
          {oddTeamPlayers.map((player, index) => (
            <div key={index} style={{backgroundColor: 'yellow', margin: '5px 0', padding: '10px', borderRadius: '5px'}}>
              {player}
            </div>
          ))}
        </div>

        <div>
          <h3>Even Team Players (using Destructuring):</h3>
          {evenTeamPlayers.map((player, index) => (
            <div key={index} style={{backgroundColor: 'lightgreen', margin: '5px 0', padding: '10px', borderRadius: '5px'}}>
              {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', color: '#333', marginBottom: '30px'}}>
          Cricket App - ES6 Features Demo
        </h1>
        
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <button 
            onClick={() => setFlag(!flag)}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Toggle View (Flag: {flag.toString()})
          </button>
        </div>

        {flag ? <ListofPlayers /> : <IndianPlayers />}

        
      </div>
    </div>
  );
};

export default App;