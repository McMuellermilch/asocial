import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseAuth } from './constants';
import { AuthProvider } from './context/AuthProvider';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Landing from './components/Landing/Landing';

firebase.initializeApp(FirebaseAuth);

const auth = firebase.auth();
const firestore = firebase.firestore();

const signIn = (email, pass) => {
  auth.signInWithEmailAndPassword(email, pass);
};

const signOut = () => {
  auth.signOut();
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

function App() {
  const [user] = useAuthState(auth);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AuthProvider user={user}>
          <Header signIn={signIn} signOut={signOut} />
          {user ? <Body /> : <Landing signIn={signIn} />}
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
