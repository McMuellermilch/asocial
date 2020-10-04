import React from 'react';

import { app, firestore } from '../../../../Base';

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

const handleLike = (id, likeNum) => {
  console.log(id);
  firestore
    .collection('posts')
    .doc(id)
    .update({ likes: likeNum + 1 });
};

const Post = (props) => {
  const classes = useStyles();

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
          onClick={() => handleLike(props.id, props.likes)}
          size="small"
          aria-label="add to favorites"
        >
          <FavoriteIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle2" color="textSecondary">
          {props.likes}
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
