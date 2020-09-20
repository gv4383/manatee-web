import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react';

import Search from './presenter';

export type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>;

export type EventData = InputOnChangeData | CheckboxProps;

const SearchContainer = () => {
  const formInitialState = {
    searchInput: '',
    searchOption: 'mentor',
  };
  const [formInputs, setFormInputs] = useState(formInitialState);
  const { searchInput, searchOption } = formInputs;

  const handleOnChange = (event: Event, data: EventData) => {
    const { name, value } = data;

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleOnSearchClick = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Create and replace with action that
    // calls api to find mentee/mentor matches
    console.log(`Searching for a ${searchOption} for "${searchInput}"`);
  };

  return (
    <Search
      onChange={handleOnChange}
      onSubmit={handleOnSearchClick}
      searchInput={searchInput}
      searchOption={searchOption}
    />
  );
};

export default SearchContainer;
