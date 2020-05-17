import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './presenter';
import { AppState } from '../../store';
import { getUsers } from '../../store/actions/users';
import { users } from '../../store/selectors/users';
// import { User } from '../../store/reducers/users/types';

interface Props {
  getUsers: typeof getUsers;
  // users: any;
}

const DashboardContainer = (props: Props) => {
  const { getUsers } = props;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Dashboard />
  );
};

const mapStateToProps = (state: AppState) => ({
  users: users(state),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    getUsers,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
