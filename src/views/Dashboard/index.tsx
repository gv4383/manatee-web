import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from './presenter';
import { getUsers } from '../../store/actions/users';
import { users as UsersSelector } from '../../store/selectors/users';

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(UsersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, getUsers]);

  return (
    <Dashboard users={users} />
  );
};

export default DashboardContainer;
