import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AuthContext } from '../../context/AuthProvider';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import UserMenu from './UserMenu/UserMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 25,
  },
}));

const Header = (props) => {
  const user = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            asocial_
          </Typography>
          {user ? <UserMenu signOut={props.signOut} /> : <div></div>}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
