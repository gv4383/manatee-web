import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form } from 'semantic-ui-react';

type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>;

const SkillForm = () => {
  const formInitialState = {
    name: '',
    description: '',
    rating: 1,
  };
  const [formInputs, setFormInputs] = useState(formInitialState);

  const handleChange = (event: Event) => {
    const { name, value } = event.currentTarget;

    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Skill name"
          name="name"
          onChange={handleChange}
          placeholder="Skill name"
        />
      </Form.Group>
      <Form.TextArea
        label="Description"
        name="description"
        onChange={handleChange}
        placeholder="Give more details..."
      />
      <Form.Button>Submit</Form.Button>
      <Form.Button>Cancel</Form.Button>
    </Form>
  );
};

export default SkillForm;
