import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { InputOnChangeData } from 'semantic-ui-react';

import Match from './presenter';

const MatchContainer = () => {
  const formInitialState = {
    searchInput: '',
    searchOption: 'mentors',
  };
  const [formInputs, setFormInputs] = useState(formInitialState);
  const { searchInput, searchOption } = formInputs;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
    const { value } = data;

    setFormInputs({
      ...formInputs,
      searchInput: value,
    });
  };

  const handleOnSearchClick = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Create and replace with action that
    // calls api to find mentee/mentor matches
    console.log(`Searching for ${searchOption} for "${searchInput}"`);
  };

  return (
    <Match
      onChange={handleOnChange}
      onSubmit={handleOnSearchClick}
      searchInput={searchInput}
    />
  );
};

export default MatchContainer;
