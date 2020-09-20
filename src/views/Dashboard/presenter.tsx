import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

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
      <Link to="/match">
        <Button>Match</Button>
      </Link>
      { displayUsers }
    </div>
  );
};

export default Dashboard;
