import React, { useState, useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { auth, firestore } from '../../../../Base';

import { AuthContext } from '../../../../context/AuthProvider';
import { Close } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = (props) => {
  const user = useContext(AuthContext);
  const classes = useStyles();
  const [userObject, setUserObject] = useState();

  useEffect(() => {
    if (user != null) {
      console.log(user.uid);
      firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserObject(doc.data());
        });
    }
  }, [user]);

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.close}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {userObject ? userObject.firstName : <Skeleton variant="text" />}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.close}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default Profile;
