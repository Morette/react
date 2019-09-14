import React from 'react';
import './style.css';

const IconSocial = ({ src, alt, width = 34 , action}) => (
  <a href={action} target="_blank" rel="noopener noreferrer">
    <img className="icon-social" src={src} alt={alt} width={width} />
  </a>
);

export default IconSocial;