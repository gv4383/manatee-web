import React from 'react';
import { Card } from 'semantic-ui-react';

interface Props {
  description: string;
  name: string;
  rating: number;
}

const SkillCard = (props: Props) => {
  const {
    description,
    name,
    rating,
  } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        Rating:
        {' '}
        {rating}
        /5
      </Card.Content>
    </Card>
  );
};

export default SkillCard;
