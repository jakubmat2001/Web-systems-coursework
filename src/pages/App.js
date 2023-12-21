import React from 'react';
import SquareTab from '../components/ProjectOneComponents/SquareTab/squaretab';
import SecondSquareTab from '../components/ProjectTwoComponents/SecondSquareTab/second-squaretab';
import Header from "../components/Header/header";
import Footer from '../components/Footer/footer';
import '../global-css/App.css';

function App() {
  let projectLink = '/project-tab/view-only-project';
  let secondProjectLink = '/second-project-tab/second-view-only-project';
  let projectText = 'View Quotes'

  //if user is loged in (therefore authorized) then replace links with project links with buttons
  if (sessionStorage.getItem('auth')) {
    projectLink = '/project-tab/project';
    secondProjectLink = '/second-project-tab/second-project';
    projectText = 'View/Enter Quotes';
  }

  return (
    <div className="container">
      <Header />
      <main className='homepage-main'>
        <div className='spash-text'>
          <h1>Quote Calculator</h1>
          <div className='paragraph-container'>
            <p>Go ahead and click on one of the projects your most intrested working on. See if your competition is bidding you out
              and create your own bid for a project by signin-up to our website </p>
          </div>
        </div>
        <div id='project-container'>
          <SquareTab name="Project Nr 1" buttonText={projectText} link={projectLink} />
          <SecondSquareTab name="Project Nr 2" buttonText={projectText} link={secondProjectLink} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;




