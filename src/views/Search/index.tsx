import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react';

import Search from './presenter';
import { clearSearchSkill, getSearchSkill } from '../../store/actions/searchSkill';

export type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>;

export type EventData = InputOnChangeData | CheckboxProps;

const SearchContainer = () => {
  const dispatch = useDispatch();
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

    dispatch(getSearchSkill(searchOption, searchInput));

    // TODO: Create selector for searchSkill
  };

  const handleOnClickback = useCallback(
    () => dispatch(clearSearchSkill()),
    [dispatch],
  );

  return (
    <Search
      onChange={handleOnChange}
      onClickBack={handleOnClickback}
      onSubmit={handleOnSearchClick}
      searchInput={searchInput}
      searchOption={searchOption}
    />
  );
};

export default SearchContainer;
