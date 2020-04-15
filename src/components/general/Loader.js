import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      position: 'absolute',
      backgroundColor: theme.palette.common.white,
      width: '100%',
      height: '100%'
    },
  },
  paper: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    maxWidth: '50%'
  }
}));


const Loader = props => {
  const classes = useStyles();

  return (
      <div className={classes.paper}>
        <div className={classes.middle}><CircularProgress size={100} color="secondary" /></div>
      </div>
  );
}

export default Loader;