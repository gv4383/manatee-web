import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Profile from './presenter';
import { getUser } from '../../store/actions/user';
import { user as UserSelector } from '../../store/selectors/user';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(UserSelector);

  useEffect(() => {
    dispatch(getUser(1));
  }, [dispatch]);

  return <Profile />;
};

export default ProfileContainer;
