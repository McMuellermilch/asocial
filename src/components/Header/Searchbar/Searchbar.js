import React, { useEffect, useState } from 'react';

import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Searchbar = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Look for asocial people"
      />
      <IconButton type="submit" className={classes.iconButton}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
