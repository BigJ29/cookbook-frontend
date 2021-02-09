import React from 'react'
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
