import React from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../../components/UserCard';
import { User } from '../../store/reducers/user/types';

interface Props {
  users: User[] | undefined;
}

const Dashboard = (props: Props) => {
  const { users } = props;
  const displayUsers = users && users.map((user: User) => (
    <Link to={`/profile/${user.id}`} key={user.attributes.first_name}>
      <UserCard
        email={user.attributes.email}
        firstName={user.attributes.first_name}
        lastName={user.attributes.last_name}
        skills={user.relationships.skills.data}
      />
    </Link>
  ));

  return (
    <div>
      { displayUsers }
    </div>
  );
};

export default Dashboard;
