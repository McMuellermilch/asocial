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
  Paper,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    width: '100%',
  },
  postCard: {
    gridColumn: 2,
    width: 600,
    padding: 20,
  },

  actions: {
    paddingRight: '16px',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },
  actionsButton: {
    gridColumn: 2,
  },
}));

const CreatePost = () => {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const [text, setText] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handlePost = (text, userid, toast) => {
    firestore
      .collection('posts')
      .doc()
      .set({
        userId: userid,
        text: text,
        createdAt: new Date(),
        likes: [],
      })
      .then(() => {
        toast();
        setText('');
      });
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <Card className={classes.postCard} elevation={0}>
        <CardContent>
          <TextField
            fullWidth
            id="standard-textarea"
            placeholder="What's on your mind?"
            value={text}
            multiline
            onChange={(e) => setText(e.target.value)}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            className={classes.actionsButton}
            variant="contained"
            color="primary"
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
    </Paper>
  );
};

export default CreatePost;
