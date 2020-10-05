import React, { useContext } from 'react';
import firebase from 'firebase';
import { app, firestore } from '../../../../Base';
import { AuthContext } from '../../../../context/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Divider,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '10px',
  },
}));

const leadingZeros = (num) => {
  return (num < 10 ? '0' : '') + num;
};

const formatDate = (date) => {
  let d = new Date(date.seconds * 1000);

  return (
    leadingZeros(d.getDate()) +
    '.' +
    leadingZeros(d.getMonth() + 1) +
    '.' +
    d.getFullYear() +
    ' | ' +
    leadingZeros(d.getHours()) +
    ':' +
    leadingZeros(d.getMinutes())
  );
};

const handleLike = (postId, userId, likes) => {
  var likesRef = firestore.collection('posts').doc(postId);

  if (!likes.includes(userId)) {
    console.log('in if');
    likesRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(userId),
    });
  } else {
    console.log('in else');
    likesRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(userId),
    });
  }
};

const Post = (props) => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  return (
    <Card elevation={5}>
      <CardContent className={classes.root}>
        <div className={classes.body}>
          <Typography>{props.text}</Typography>
        </div>
        <div>
          <Typography variant="subtitle2" color="textSecondary">
            {formatDate(props.date)}
          </Typography>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <IconButton
          onClick={() => handleLike(props.id, auth.uid, props.likes)}
          size="small"
          aria-label="add to favorites"
        >
          <FavoriteIcon
            fontSize="small"
            color={props.likes.includes(auth.uid) ? 'primary' : 'inherit'}
          />
        </IconButton>
        <Typography variant="subtitle2" color="textSecondary">
          {props.likes.length}
        </Typography>
        <IconButton size="small" aria-label="comment">
          <CommentIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle2" color="textSecondary">
          4
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
