import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/yourusername"><FaGithub /></a>
      <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
      <a href="https://stackoverflow.com/users/yourid"><FaStackOverflow /></a>
    </footer>
  );
}

export default Footer;
