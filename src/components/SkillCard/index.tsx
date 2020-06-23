import React from 'react';
import { Button, Card } from 'semantic-ui-react';

import './styles.scss';

interface Props {
  description: string;
  name: string;
  onClickDelete: (skillId: number, userId: number) => void;
  rating: number;
  skillId: number;
  userId: number;
}

const SkillCard = (props: Props) => {
  const {
    description,
    name,
    onClickDelete,
    rating,
    skillId,
    userId,
  } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header className="skill-card-header">
          <div>{name}</div>
          <div>
            Rating:
            {' '}
            {rating}
            /5
          </div>
        </Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button>Edit</Button>
        <Button
          color="red"
          onClick={() => onClickDelete(skillId, userId)}
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};

export default SkillCard;
