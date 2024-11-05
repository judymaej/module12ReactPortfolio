import React from 'react';

function Project({ title, imageUrl, appLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={appLink}>Live Demo</a>
      <a href={repoLink}>GitHub Repo</a>
    </div>
  );
}

export default Project;
