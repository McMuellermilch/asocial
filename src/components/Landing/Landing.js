import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import SignIn from './SignIn/SignIn';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: '1fr auto 1fr',
  },
  main_content: {
    gridRow: 2,
    gridColumn: 2,
    display: 'grid',
    gridTemplateRows: 'auto auto auto auto',
    gap: '10px',
    textAlign: 'center',
  },
  pre_title: {
    fontSize: 30,
  },
  title: {
    fontSize: 50,
  },
  sub_title: {
    fontSize: 20,
  },
  button_container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '10px',
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignIn = (email, pass) => {
    props.signIn(email, pass);
    setSignInOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.main_content}>
        <div className={classes.pre_title}>Welcome to</div>
        <div className={classes.title}>asocial_</div>
        <div className={classes.sub_title}>
          the first open source social network
        </div>
        <div className={classes.button_container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSignInOpen(true)}
          >
            Sign In
          </Button>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
          <SignIn
            open={signInOpen}
            handleSave={handleSignIn}
            handleClose={() => setSignInOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
