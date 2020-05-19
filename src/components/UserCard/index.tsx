import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import pic from '../../assets/person1.jpg';

interface Props {
  email: string;
  firstName: string;
  lastName: string;
}

const UserCard = (props: Props) => {
  const {
    email,
    firstName,
    lastName,
  } = props;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card>
      <Image src={pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
        <Card.Meta>
          <span className="date">{email}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="star" />
        22 Skills
      </Card.Content>
    </Card>
  );
};

export default UserCard;
