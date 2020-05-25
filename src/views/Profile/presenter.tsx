import React from 'react';

import { User } from '../../store/reducers/user/types';

interface Props {
  user: User | undefined;
}

const Profile = (props: Props) => {
  const { user } = props;
  console.log(user);

  return (
    <div>PROFILE PAGE</div>
  );
};

export default Profile;
