import React, { useContext } from 'react'

import Context from '../utils/context';

import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  const context = useContext(Context);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container  maxWidth="md"
                  classes={{
                    root: classes.container,
                  }}>
        test
      </Container>
    </div>
  );
}

export default Dashboard;