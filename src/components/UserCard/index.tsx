import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import pic from '../../assets/person1.jpg';
import { Skill } from '../../store/reducers/skill/types';
import { SkillRelationship } from '../../store/reducers/user/types';

interface Props {
  email: string | undefined;
  firstName: string | undefined;
  isProfileCard?: boolean;
  lastName: string | undefined;
  skills?: SkillRelationship[] | Skill[];
}

const UserCard = (props: Props) => {
  const {
    email,
    firstName,
    isProfileCard,
    lastName,
    skills,
  } = props;
  const fullName = `${firstName} ${lastName}`;
  const skillCount = skills && skills.length;
  const extraCardContent = !isProfileCard && (
    <Card.Content extra>
      <Icon name="cogs" />
      {skillCount}
      {' '}
      Skills
    </Card.Content>
  );

  return (
    <Card>
      <Image src={pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
        <Card.Meta>
          <span className="date">{email}</span>
        </Card.Meta>
      </Card.Content>
      {extraCardContent}
    </Card>
  );
};

export default UserCard;
