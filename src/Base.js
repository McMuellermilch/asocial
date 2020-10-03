import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { FirebaseAuth } from './constants';

const app = firebase.initializeApp(FirebaseAuth);

const auth = app.auth();
const firestore = app.firestore();
const storage = app.storage();

export { app, auth, firestore, storage };
