import React from 'react';

import './style.css';

const About = ({ children, className = "" }) => (
  <article className={`about ${className}`}>{children}</article>
);

export default About;