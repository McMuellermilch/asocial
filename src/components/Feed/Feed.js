import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import FeedElement from './FeedElement/FeedElement';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '30px',
    padding: 10,
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <FeedElement
        name="Steven R."
        src="avatar1_male.jpg"
        title="My first post y'all"
        date="20.09.2020"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
      <FeedElement
        name="Jessica M."
        src="avatar1_female.jpg"
        title="asocial_ is sick!"
        date="18.09.2020"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
      />
      <FeedElement
        name="Phil D."
        src="avatar2_male.jpg"
        title="First, bi***es!"
        date="17.09.2020"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
      />
    </Paper>
  );
};

export default Feed;
