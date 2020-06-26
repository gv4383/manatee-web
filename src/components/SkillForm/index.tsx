import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  CheckboxProps,
  InputOnChangeData,
  TextAreaProps,
} from 'semantic-ui-react';

import { createSkill } from '../../store/actions/skill';

import './styles.scss';

type Event =
  | ChangeEvent<HTMLInputElement>
  | FormEvent<HTMLTextAreaElement>
  | FormEvent<HTMLInputElement>;

type EventData =
  | CheckboxProps
  | InputOnChangeData
  | TextAreaProps;

interface Props {
  isEditSkill?: boolean;
  onClickCancel?: () => void;
  skillDescription?: string;
  skillName?: string;
  skillRating?: number;
  userId: string | undefined;
}

const SkillForm = (props: Props) => {
  const {
    isEditSkill,
    onClickCancel,
    skillDescription,
    skillName,
    skillRating,
    userId,
  } = props;
  const formInitialState = {
    name: skillName || '',
    description: skillDescription || '',
    rating: skillRating || 1,
  };
  const [formInputs, setFormInputs] = useState(formInitialState);
  const {
    description,
    name,
    rating,
  } = formInputs;
  const dispatch = useDispatch();

  const handleChange = (event: Event, data: EventData) => {
    const { name, value } = data;

    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = () => {
    if (userId) {
      dispatch(createSkill(
        name,
        description,
        rating,
        parseInt(userId, 10),
      ));
    }

    setFormInputs(formInitialState);
  };

  const displayCancelButton = isEditSkill && (
    <Form.Button onClick={onClickCancel}>
      Cancel
    </Form.Button>
  );

  return (
    <Form>
      <Form.Input
        fluid
        label="Name"
        name="name"
        onChange={handleChange}
        placeholder="Skill name"
        value={name}
      />
      <Form.TextArea
        label="Description"
        name="description"
        onChange={handleChange}
        placeholder="Share some details about this skill..."
        value={description}
      />
      <Form.Group
        inline={!isEditSkill}
        grouped={isEditSkill}
      >
        <label>Rating</label>
        <Form.Radio
          checked={formInputs.rating === 1}
          label="1"
          name="rating"
          onChange={handleChange}
          value={1}
        />
        <Form.Radio
          checked={formInputs.rating === 2}
          label="2"
          name="rating"
          onChange={handleChange}
          value={2}
        />
        <Form.Radio
          checked={formInputs.rating === 3}
          label="3"
          name="rating"
          onChange={handleChange}
          value={3}
        />
        <Form.Radio
          checked={formInputs.rating === 4}
          label="4"
          name="rating"
          onChange={handleChange}
          value={4}
        />
        <Form.Radio
          checked={formInputs.rating === 5}
          label="5"
          name="rating"
          onChange={handleChange}
          value={5}
        />
      </Form.Group>
      <div className="skill-form-action-bar-container">
        <Form.Button
          color="green"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </Form.Button>
        {displayCancelButton}
      </div>
    </Form>
  );
};

export default SkillForm;
