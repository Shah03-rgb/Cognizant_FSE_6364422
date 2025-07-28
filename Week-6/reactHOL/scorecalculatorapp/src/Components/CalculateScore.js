import React from 'react';
import '../Stylesheets/mystyle.css'; // we’ll create this next


const CalculateScore = ({ name, school, total, goal }) => {
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-container">
      <h2>Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Number of Subjects:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
};

export default CalculateScore;
