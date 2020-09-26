import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const signIn = () => {
  auth
    .signInWithEmailAndPassword('mueller.florian99@outlook.com', 'test123')
    .then((res) => {
      console.log(res);
    });
};

const signOut = () => {
  auth.signOut().then((res) => {
    console.log(res);
  });
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider user={user}>
        <Header signIn={signIn} signOut={signOut} />
        {user ? <Body /> : <Landing signIn={signIn} />}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
