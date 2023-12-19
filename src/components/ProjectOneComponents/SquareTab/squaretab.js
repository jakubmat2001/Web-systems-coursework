import React from 'react';
import '../../../global-css/squaretab.css'

//create a function that creastes a project component which can be re-used
//it will move the user to designated page via link, have and different button text based on argument provide
function SquareTab({ name, buttonText, link }) {
  return (
    <div className="square-tab">
      <h2>{name}</h2>
      <button onClick={() => window.location.href = link}>{buttonText}</button>
    </div>
  );
}

export default SquareTab;
