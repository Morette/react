import React from 'react';

import './style.css';
import Avatar from '../../images/avatar.png';
import GitHub from '../../images/github.svg';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';
import LinkedIn from '../../images/linkedin.svg';

import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Avatar} alt={"Avatar Image"} width={130} />
    </dd>
    <dt className="name">Thiago Morette</dt>
    <dd className="description">Graduate engineer and passionate developer. Left engineering to attend my real passion developing softwares.</dd>
    <dd className="socials">
      <IconSocial src={GitHub} alt="Logo GitHub" />
      <IconSocial src={Facebook} alt="Logo Facebook" />
      <IconSocial src={Twitter} alt="Logo Twitter" />
      <IconSocial src={LinkedIn} alt="Logo LinkedIn" />
      <IconSocial src={Instagram} alt="Logo Instagram" />
    </dd>
  </dl>
);

export default ProfileUser;