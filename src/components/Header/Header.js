import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AuthContext } from '../../context/AuthProvider';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

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
          {user ? (
            <Button color="inherit" onClick={props.signOut}>
              Sign Out
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
