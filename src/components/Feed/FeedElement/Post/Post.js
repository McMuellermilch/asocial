import React from 'react';

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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
