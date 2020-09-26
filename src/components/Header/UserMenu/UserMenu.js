import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AuthContext } from '../../../context/AuthProvider';
import { AccountCircle } from '@material-ui/icons';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

const UserMenu = (props) => {
  const user = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={props.signOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
