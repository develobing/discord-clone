import * as React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { logout } from '../../utils/auth';
import { getActions } from '../../store/actions/roomActions';
import { connect } from 'react-redux';

const BasicMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? 'Video Disabled' : 'Video & Audio Enabled'}
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = ({ room }) => ({
  ...room,
});

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)(BasicMenu);
