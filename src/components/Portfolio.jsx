import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', imageUrl: 'project1.jpg', appLink: 'link-to-app', repoLink: 'link-to-repo' },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
