import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
} from '@material-ui/core';

import User from './User/User';
import Post from './Post/Post';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 475,
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '30px',
  },
}));

const FeedElement = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.layout}>
        <User name={props.name} src={props.src} />
        <Post title={props.title} date={props.date} text={props.text} />
      </CardContent>
    </Card>
  );
};

export default FeedElement;
