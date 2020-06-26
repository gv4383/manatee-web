import React, { useState } from 'react';
import {
  Button,
  Card,
} from 'semantic-ui-react';

import SkillForm from '../SkillForm';

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
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClickEditCancel = () => setIsEditing(!isEditing);

  const nonEditCard = (
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
        <Button onClick={handleOnClickEditCancel}>Edit</Button>
        <Button
          color="red"
          onClick={() => onClickDelete(skillId, userId)}
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );

  const editCard = (
    <Card className="skill-card-container">
      <SkillForm
        isEditSkill
        onClickCancel={handleOnClickEditCancel}
        skillDescription={description}
        skillName={name}
        skillRating={rating}
        userId={userId.toString()}
      />
    </Card>
  );

  const displaySkillCard = isEditing
    ? editCard
    : nonEditCard;

  return displaySkillCard;
};

export default SkillCard;
