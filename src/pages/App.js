import React from 'react';
import SquareTab from '../components/squaretab';
import Header from "../components/header";
import '../css/App.css';

function App() {
  let projectLink = '/project-tab/view-only-project';

  if (sessionStorage.getItem('auth')) {
    projectLink = '/project-tab/project';
  }

  return (
    <div className="container">
      <Header />
      <main id="detail">
        <SquareTab name="Project" buttonText="Go to Project" link={projectLink} />
      </main>
    </div>
  );
}

export default App;



