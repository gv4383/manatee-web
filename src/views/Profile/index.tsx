import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Profile from './presenter';
import { destroySkill } from '../../store/actions/skill';
import { clearUser, getUser } from '../../store/actions/user';
import {
  skills as SkillsSelector,
  user as UserSelector,
} from '../../store/selectors/user';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

const ProfileContainer = (props: Props) => {
  const {
    match: {
      params: {
        id: profileId,
      },
    },
  } = props;
  const dispatch = useDispatch();
  const user = useSelector(UserSelector);
  const skills = useSelector(SkillsSelector);
  const parsedProfileId = parseInt(profileId, 10);

  useEffect(() => {
    dispatch(getUser(parsedProfileId));
  }, [dispatch, parsedProfileId]);

  const handleOnClickBack = () => dispatch(clearUser());

  const handleDeleteSkill = (skillId: number, userId: number) => {
    dispatch(destroySkill(skillId, userId));
  };

  return (
    <Profile
      handleDeleteSkill={handleDeleteSkill}
      onClickBack={handleOnClickBack}
      skills={skills}
      user={user}
    />
  );
};

export default ProfileContainer;
