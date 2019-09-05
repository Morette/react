import React from 'react';

import './style.css';
import Avatar from '../../images/avatar.png';

import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Avatar} alt={"Avatar Image"} width={130} />
    </dd>
    <dt className="name">Thiago Morette</dt>
    <dd className="description">Graduate engineer and passionate developer. Left engineering to attend my real passion developing softwares.</dd>
  </dl>
);

export default ProfileUser;