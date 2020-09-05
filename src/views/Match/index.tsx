import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { InputOnChangeData } from 'semantic-ui-react';

import Match from './presenter';

const MatchContainer = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
    const { value } = data;

    setSearchInput(value);
  };

  const handleOnSearchClick = (event: FormEvent) => {
    event.preventDefault();

    console.log(`Searching for "${searchInput}"`);
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
