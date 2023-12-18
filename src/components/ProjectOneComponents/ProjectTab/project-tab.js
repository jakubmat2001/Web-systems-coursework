import React from 'react';
import SquareTab from '../SquareTab/squaretab';

function ProjectTab() {
  const authUser = sessionStorage.getItem('auth');
  let projectLink = '/project-tab/view-only-project';
  if (authUser) {
    projectLink = '/project-tab/project';
  }

  return <SquareTab name="Project 1" buttonText="Check" link={projectLink} />;
}

export default ProjectTab;

