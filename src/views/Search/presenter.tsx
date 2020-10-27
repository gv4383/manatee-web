import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Icon,
} from 'semantic-ui-react';

import { Event, EventData } from './index';

interface Props {
  onChange: (event: Event, data: EventData) => void;
  onClickBack: () => void;
  onSubmit: (event: FormEvent) => void;
  searchInput: string;
  searchOption: string;
}

const Search = (props: Props) => {
  const {
    onChange,
    onClickBack,
    onSubmit,
    searchInput,
    searchOption,
  } = props;

  const searchIcon = (
    <Icon
      circular
      link
      name="search"
      onClick={onSubmit}
    />
  );

  return (
    <div>
      <Link to="/">
        <Button onClick={onClickBack}>Back</Button>
      </Link>
      <Form onSubmit={onSubmit}>
        <Form.Input
          icon={searchIcon}
          name="searchInput"
          onChange={onChange}
          placeholder="Search"
          value={searchInput}
        />
        <Form.Group inline>
          <Form.Radio
            checked={searchOption === 'mentee'}
            label="mentee"
            name="searchOption"
            onChange={onChange}
            value="mentee"
          />
          <Form.Radio
            checked={searchOption === 'mentor'}
            label="mentor"
            name="searchOption"
            onChange={onChange}
            value="mentor"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
