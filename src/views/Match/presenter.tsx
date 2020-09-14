import React, { ChangeEvent, FormEvent } from 'react';
import {
  Icon,
  Input,
  InputOnChangeData,
} from 'semantic-ui-react';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
  onSubmit: (event: FormEvent) => void;
  searchInput: string;
}

const Match = (props: Props) => {
  const {
    onChange,
    onSubmit,
    searchInput,
  } = props;

  const searchIcon = (
    <Icon
      circular
      link
      name="search"
      onClick={onSubmit}
    />
  );

  // TODO: Select whether to find mentee or mentee matches
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          icon={searchIcon}
          name="searchInput"
          onChange={onChange}
          placeholder="Search"
          value={searchInput}
        />
      </form>
    </div>
  );
};

export default Match;
