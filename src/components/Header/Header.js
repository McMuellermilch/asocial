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
    fontWeight: 800,
  },
  logo: {
    height: '25px',
  },
  toolBar: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr 100px',
  },
  logoContainer: {
    gridColumn: 1,
  },
  userContainer: {
    gridColumn: 3,
    alignSelf: 'center',
    justifySelf: 'end',
  },
}));

const Header = (props) => {
  const user = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src="logo_line.png" alt="" />
          </div>

          <div className={classes.userContainer}>
            {user ? <UserMenu signOut={props.signOut} /> : <div></div>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
