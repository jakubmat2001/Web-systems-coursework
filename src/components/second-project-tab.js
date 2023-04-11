import React from 'react';
import SecondSquareTab from './second-squaretab';

//when clicked on a second project button, take loged in user to view-only-project else second-view-only-project
function SecondProjectTab() {
  const authUser = sessionStorage.getItem('auth');
  let projectLink = '/second-project-tab/second-view-only-project';
  if (authUser) {
    projectLink = '/project-tab/view-only-project';
  }

  return <SecondSquareTab name="Project 2" buttonText="Check" link={projectLink} />;
}

export default SecondProjectTab;