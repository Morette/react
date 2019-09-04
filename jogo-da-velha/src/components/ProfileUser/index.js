import React from 'react';

import Avatar from '../../images/avatar.png';

import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Avatar} alt={"Avatar Image"} width={130} />
    </dd>
    <dt>Thiago Morette</dt>
    <dd>Graduate engineer and passionate developer. Left engineering to attend my real passion developing softwares.</dd>
  </dl>
);

export default ProfileUser;