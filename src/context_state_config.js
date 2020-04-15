import React, { useReducer } from 'react';
import Context from './utils/context';
// import * as ACTIONS from './store/actions/actions';
// import * as AuthReducer from './store/reducers/auth_reducer';
import Routes from './routes';

const ContextState = () => {
    return(
      <Context.Provider
          value={{
            
          }}>
          <Routes />
      </Context.Provider>
    )
}

export default ContextState;
