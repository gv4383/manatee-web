import React from 'react';

import UserCard from '../../components/UserCard';
import { User } from '../../store/reducers/users/types';

interface Props {
  users: User[] | undefined;
}

const Dashboard = (props: Props) => {
  const { users } = props;
  const displayUsers = users && users.map((user: User) => (
    <UserCard key={user.attributes.first_name} />
  ));

  return (
    <div>
      { displayUsers }
    </div>
  );
};

export default Dashboard;
