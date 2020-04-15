import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';
import Context from './utils/context';
import Dashboard from './views/Dashboard';

const Routes = () => {
  const context = useContext(Context)
  console.log(context)

  return(
    <React.Fragment>
      <Router history={history} >
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </React.Fragment>
      </Router>
    </React.Fragment>
  )
}

export default Routes;