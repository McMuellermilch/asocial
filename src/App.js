import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

import { auth, firestore } from './Base';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthProvider } from './context/AuthProvider';

import { SnackbarProvider } from 'notistack';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Landing from './components/Landing/Landing';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

function App() {
  const [user] = useAuthState(auth);
  const classes = useStyles();

  return (
    <SnackbarProvider maxSnack={3}>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <AuthProvider user={user}>
            <Header />
            {user ? <Body /> : <Landing />}
          </AuthProvider>
        </ThemeProvider>
      </div>
    </SnackbarProvider>
  );
}

export default App;
