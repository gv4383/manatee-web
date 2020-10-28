import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react';

import Search from './presenter';
import { clearSearchSkill, getSearchSkill } from '../../store/actions/searchSkill';
import {
  skills as SearchedSkillsSelector,
  users as SearchedUsersSelector,
} from '../../store/selectors/searchSkill';

export type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>;

export type EventData = InputOnChangeData | CheckboxProps;

const SearchContainer = () => {
  const dispatch = useDispatch();
  const searchedSkills = useSelector(SearchedSkillsSelector);
  const searchedUsers = useSelector(SearchedUsersSelector);
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
      searchedSkills={searchedSkills}
      searchedUsers={searchedUsers}
      searchInput={searchInput}
      searchOption={searchOption}
    />
  );
};

export default SearchContainer;
