import React from 'react';

import UserCard from '../../components/UserCard';
import { User } from '../../store/reducers/users/types';

interface Props {
  users: User[] | undefined;
}

const Dashboard = (props: Props) => {
  const { users } = props;
  const displayUsers = users && users.map((user: User) => (
    <UserCard
      key={user.attributes.first_name}
      email={user.attributes.email}
      firstName={user.attributes.first_name}
      lastName={user.attributes.last_name}
      skills={user.relationships.skills.data}
    />
  ));

  return (
    <div>
      { displayUsers }
    </div>
  );
};

export default Dashboard;
