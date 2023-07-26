import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar';
import FriendsSideBar from './FriendsSideBar';
import Messenger from './Messenger';
import AppBar from './AppBar';
import { logout } from '../../utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const DashboardPage = ({ setUserDetails }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      logout();
    } else {
      setUserDetails(JSON.parse(user));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(DashboardPage);
