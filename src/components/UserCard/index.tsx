import React, { FunctionComponent } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import pic from '../../assets/person1.jpg';

const UserCard: FunctionComponent = () => (
  <Card>
    <Image src={pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      22 Friends
    </Card.Content>
  </Card>
);

export default UserCard;
