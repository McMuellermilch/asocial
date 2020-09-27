import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseAuth } from './constants';

const app = firebase.initializeApp(FirebaseAuth);

const auth = app.auth();
const firestore = app.firestore();

export { app, auth, firestore };
