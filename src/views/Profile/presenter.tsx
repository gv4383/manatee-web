import React from 'react';

import { Skill, User } from '../../store/reducers/user/types';

interface Props {
  skills: Skill[] | undefined;
  user: User | undefined;
}

const Profile = (props: Props) => {
  const { skills, user } = props;
  console.log(user);
  console.log(skills);

  return (
    <div>PROFILE PAGE</div>
  );
};

export default Profile;
