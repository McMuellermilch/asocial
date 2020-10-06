import React, { useState, useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { auth, firestore, storage } from '../../../../Base';

import { AuthContext } from '../../../../context/AuthProvider';
import { Close } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  DialogContent,
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
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (user != null) {
      firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserObject(doc.data());
        });
    }
  }, [user]);

  const handleClick = () => {
    storage
      .ref('/profilePictures/' + user.uid)
      .put(file)
      .then(() => {
        storage
          .ref('/profilePictures/' + user.uid)
          .getDownloadURL()
          .then((url) => {
            firestore.collection('users').doc(user.uid).update({
              image: url,
            });
          });
      });
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
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
              Edit Profile
            </Typography>
            <Button autoFocus color="inherit" onClick={props.close}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          {userObject ? <div>{userObject.firstName}</div> : <Skeleton />}
          <div>
            <DropzoneArea
              filesLimit={1}
              onChange={(files) => setFile(files[0])}
            />
          </div>
          <div>
            <Button onClick={handleClick}>upload</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
