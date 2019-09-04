import React from 'react';

import './style.css';

const AvatarProfile = ({ src, alt, width }) => (
  <img src={src} alt={alt} width={width} className="avatar-profile" />
)

export default AvatarProfile;