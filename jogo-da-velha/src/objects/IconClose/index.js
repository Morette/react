import React from 'react';

import closeIcon from '../../images/close.svg';

const IconClose = ({ onClick }) => (
  <img src={closeIcon}
    alt="Close Icon"
    width={20}
    className="icon-close"
    onClick={onClick}
  />
);


export default IconClose;