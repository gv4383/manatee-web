import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import pic from '../../assets/person1.jpg';
import { RelationshipSkill } from '../../store/reducers/user/types';

interface Props {
  email: string;
  firstName: string;
  lastName: string;
  skills: RelationshipSkill[];
}

const UserCard = (props: Props) => {
  const {
    email,
    firstName,
    lastName,
    skills,
  } = props;
  const fullName = `${firstName} ${lastName}`;
  const skillCount = skills.length;

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
        <Icon name="cogs" />
        {skillCount}
        {' '}
        Skills
      </Card.Content>
    </Card>
  );
};

export default UserCard;
