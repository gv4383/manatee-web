import React from 'react';

import UserCard from '../../components/UserCard';

interface Props {
  users: any;
}

const Dashboard = (props: Props) => {
  const { users } = props;
  const displayUsers = users?.data && users.data.map((user: any) => <UserCard key={user.name} />);

  return (
    <div>
      { displayUsers }
    </div>
  );
};

export default Dashboard;
