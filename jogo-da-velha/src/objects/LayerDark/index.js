import React from 'react';

import './style.css';

const About = ({ children, className = "" }) => (
  <article className={`layer-dark ${className}`}>{children}</article>
);

export default About;