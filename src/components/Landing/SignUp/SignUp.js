import React, { useState } from 'react';

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

const SignUp = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
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
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            onChange={(e) => setPass(e.target.value)}
            margin="dense"
            id="name"
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
            onClick={() => props.handleSave(email, pass)}
            color="primary"
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUp;
