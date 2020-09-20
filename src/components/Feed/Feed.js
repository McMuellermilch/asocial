import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import FeedElement from './FeedElement/FeedElement';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '10px',
    padding: 10,
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <FeedElement />
      <FeedElement />
      <FeedElement />
    </Paper>
  );
};

export default Feed;
