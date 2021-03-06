import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Feed from '../Feed/Feed';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  body_layout: {
    margin: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    gap: '20px',
  },
}));

const Body = () => {
  const classes = useStyles();
  return (
    <div className={classes.body_layout}>
      <div></div>
      <Feed />
      <div></div>
    </div>
  );
};

export default Body;
