import React, { useContext, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { auth, firestore } from '../../../Base';

import { AuthContext } from '../../../context/AuthProvider';
import { AccountCircle } from '@material-ui/icons';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

import Profile from './Profile/Profile';

const UserMenu = (props) => {
  const user = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState();
  const [profileOpen, setProfileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        size="medium"
      >
        <AccountCircle fontSize="large" />
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
        <MenuItem onClick={() => setProfileOpen(true)}>Edit Profile</MenuItem>
        <MenuItem onClick={signOut}>Sign Out</MenuItem>
      </Menu>
      <Profile open={profileOpen} close={() => setProfileOpen(false)} />
    </div>
  );
};

export default UserMenu;
