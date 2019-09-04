import React from 'react';
import CollabCode from "../../images/logo.png"
import CollabCodeLight from '../../images/logo-light.png';

const LogoCollab = ({ light = false }) => {
  return (
    <img 
      className="logo-collab" 
      src={light ? CollabCodeLight : CollabCode} 
      alt="Logo da Collabcode" 
    />
  )
}

export default LogoCollab;