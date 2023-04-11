import React from 'react';
import SecondSquareTab from './second-squaretab';

function SecondProjectTab() {
  const authUser = sessionStorage.getItem('auth');
  let projectLink = '/second-project-tab/second-view-only-project';
  if (authUser) {
    projectLink = '/project-tab/view-only-project';
  }

  return <SecondSquareTab name="Project 2" buttonText="Check" link={projectLink} />;
}

export default SecondProjectTab;