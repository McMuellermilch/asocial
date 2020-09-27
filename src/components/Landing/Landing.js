import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
    minHeight: '80vh',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: '1fr auto 1fr',
  },
  main_content: {
    gridRow: 2,
    gridColumn: 2,
    display: 'grid',
    gridTemplateRows: 'auto auto auto auto',
    gap: '25px',
    textAlign: 'center',
  },
  pre_title: {
    fontSize: 30,
  },
  title: {
    fontWeight: 800,
  },
  logo: {
    width: '150px',
  },
  sub_title: {
    fontSize: 19,
    fontWeight: 100,
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
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignIn = (email, pass) => {
    props.signIn(email, pass);
    setSignInOpen(false);
  };

  const handleSignUp = (email, pass) => {
    props.signUp(email, pass);
    setSignUpOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.main_content}>
        <div className={classes.pre_title}>
          Welcome to <span className={classes.title}>asocial_</span>
        </div>
        <div>
          <img className={classes.logo} src="logo.png" alt="" />
        </div>
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSignUpOpen(true)}
          >
            Sign Up
          </Button>
          <SignIn open={signInOpen} handleClose={() => setSignInOpen(false)} />
          <SignUp
            open={signUpOpen}
            handleSave={handleSignUp}
            handleClose={() => setSignUpOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
