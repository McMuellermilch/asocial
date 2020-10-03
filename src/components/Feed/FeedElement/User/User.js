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

const formatName = (firstName, lastName) => {
  return firstName + ' ' + lastName.substring(0, 1) + '.';
};

//TODO the name and avatar need to be center aligned

const User = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.large}
        alt="Remy Sharp"
        src={props.user ? props.user.image : ''}
      />
      <Typography color="textSecondary">
        {props.user ? (
          formatName(props.user.firstName, props.user.lastName)
        ) : (
          <></>
        )}
      </Typography>
    </div>
  );
};

export default User;
