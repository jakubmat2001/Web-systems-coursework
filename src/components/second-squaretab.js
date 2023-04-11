import React from 'react';
import '../css/squaretab.css';

// Create a function that creates a project component for the second project which can be re-used
// It will move the user to the designated page via link, have different button text based on the argument provided
function SecondSquareTab({ name, buttonText, link }) {
  return (
    <div className="square-tab">
      <h2>{name}</h2>
      <button onClick={() => window.location.href = link}>{buttonText}</button>
    </div>
  );
}

export default SecondSquareTab;
