import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import {
  Form,
  CheckboxProps,
  InputOnChangeData,
  TextAreaProps,
} from 'semantic-ui-react';

type Event =
  | ChangeEvent<HTMLInputElement>
  | FormEvent<HTMLTextAreaElement>
  | FormEvent<HTMLInputElement>;

type EventData =
  | CheckboxProps
  | InputOnChangeData
  | TextAreaProps;

const SkillForm = () => {
  const formInitialState = {
    name: '',
    description: '',
    rating: 1,
  };
  const [formInputs, setFormInputs] = useState(formInitialState);

  const handleChange = (event: Event, data: EventData) => {
    const { name, value } = data;

    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <Form>
      <Form.Input
        fluid
        label="Name"
        name="name"
        onChange={handleChange}
        placeholder="Skill name"
      />
      <Form.TextArea
        label="Description"
        name="description"
        onChange={handleChange}
        placeholder="Share some details about this skill..."
      />
      <Form.Group inline>
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
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  );
};

export default SkillForm;
