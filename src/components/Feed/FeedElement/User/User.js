import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'min-content min-content',
    gap: '5px',
    minWidth: 100,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

//TODO the name and avatar need to be center aligned

const User = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.large} alt="Remy Sharp" src={props.src} />
      <Typography color="textSecondary">{props.name}</Typography>
    </div>
  );
};

export default User;
