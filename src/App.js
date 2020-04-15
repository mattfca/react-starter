import React from 'react';
import ContextState from './context_state_config';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(require('./theme.json'))

const App = () => {

  return(
    <MuiThemeProvider theme={theme}>
      <ContextState />
    </MuiThemeProvider>
  )
}

export default App;