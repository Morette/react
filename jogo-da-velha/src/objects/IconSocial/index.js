import React from 'react';
import './style.css';

const IconSocial = ({src, alt, width = 34}) => (
  <img className="icon-social" src={src} alt={alt} width={width} />
);

export default IconSocial;