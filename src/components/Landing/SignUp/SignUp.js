import React, { useState } from 'react';

import { auth, firestore } from '../../../Base';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const signUp = (email, pass) => {
  auth
    .createUserWithEmailAndPassword(email, pass)
    .then((cred) => {
      return firestore.collection('users').doc(cred.user.uid).set({
        name: 'Steve',
      });
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode + ': ' + errorMessage);
    });
};

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To become asocial, just enter your details here:
          </DialogContentText>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            onChange={(e) => setPass(e.target.value)}
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={props.handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => signUp(email, pass)}
            color="primary"
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUp;
