import React, { useState, useContext } from 'react';

import { auth, firestore } from '../../../Base';
import { AuthContext } from '../../../context/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';

import { useSnackbar } from 'notistack';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 475,
    margin: 20,
  },
  layout: {
    margin: 15,
  },
}));

const handlePost = (text, userid, toast, setText) => {
  firestore
    .collection('posts')
    .doc()
    .set({
      userId: userid,
      text: text,
      createdAt: new Date().toLocaleDateString(),
    })
    .then(() => {
      toast();
    });
};

const CreatePost = () => {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const [text, setText] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent className={classes.layout}>
        <TextField
          fullWidth
          id="standard-textarea"
          placeholder="What's on your mind?"
          value={text}
          multiline
          onChange={(e) => setText(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            handlePost(text, user.uid, () =>
              enqueueSnackbar('Post created!', {
                variant: 'success',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default CreatePost;
