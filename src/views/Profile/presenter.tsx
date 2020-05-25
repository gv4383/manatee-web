import React from 'react';

import { Skill, User } from '../../store/reducers/user/types';
import UserCard from '../../components/UserCard';

interface Props {
  skills: Skill[] | undefined;
  user: User | undefined;
}

const Profile = (props: Props) => {
  const { skills, user } = props;
  const email = user && user.attributes.email;
  const firstName = user && user.attributes.first_name;
  const lastName = user && user.attributes.last_name;

  return (
    <div>
      <UserCard
        email={email}
        firstName={firstName}
        lastName={lastName}
        skills={skills}
        isProfileCard
      />
    </div>
  );
};

export default Profile;
