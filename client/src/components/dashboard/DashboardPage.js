import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from './sidebar/SideBar';
import FriendsSideBar from './FriendsSideBar';
import Messenger from './messenger/Messenger';
import AppBar from './AppBar';
import { logout } from '../../utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { connectWithSocketServer } from '../../sockets/socketConnection';
import Room from './room/Room';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const DashboardPage = ({ isUserInRoom, setUserDetails }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      logout();
    } else {
      const userDetails = JSON.parse(user);
      setUserDetails(userDetails);
      connectWithSocketServer(userDetails, token);
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => ({
  ...room,
});

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(DashboardPage);
