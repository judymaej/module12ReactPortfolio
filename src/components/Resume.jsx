import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
