import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
