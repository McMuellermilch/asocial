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

const signUp = (email, pass, firstName, lastName) => {
  auth
    .createUserWithEmailAndPassword(email, pass)
    .then((cred) => {
      return firestore.collection('users').doc(cred.user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

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
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
          />
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
            onClick={() => signUp(email, pass, firstName, lastName)}
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
