import React, { useState } from 'react';

import { auth, firestore } from '../../../Base';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const signIn = (email, pass) => {
  auth.signInWithEmailAndPassword(email, pass);
};

const SignIn = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
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
            onClick={() => signIn(email, pass)}
            color="primary"
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignIn;
