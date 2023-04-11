import React from 'react';
import SquareTab from '../components/squaretab';
import SecondSquareTab from '../components/second-squaretab';
import Header from "../components/header";
import '../css/App.css';

function App() {
  let projectLink = '/project-tab/view-only-project';
  let secondProjectLink = '/second-project-tab/second-view-only-project';

  //if user is loged in (therefore authorized) then replace links with project links with buttons
  if (sessionStorage.getItem('auth')) {
    projectLink = '/project-tab/project';
    secondProjectLink = '/second-project-tab/second-project';
  }

  return (
    <div className="container">
      <Header />
      <main id="detail">
        <SquareTab name="Project" buttonText="Go to Project" link={projectLink} />
        <SecondSquareTab name="Project 2" buttonText="Go to Project 2" link={secondProjectLink} />
        
      </main>
    </div>
  );
}

export default App;




