// please note that firebase auth adds about 30kb to your bundle size on Web
import { initializeApp } from 'firebase/app';

import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase
} from 'firebase/auth';
import { Firebase } from './types';

let auth: ReturnType<typeof initializeAuth>;

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyCOFYjchl4AbW5GlHoBMUl_RrpmgW2c6Hw',
    authDomain: 'nextprutest.firebaseapp.com',
    databaseURL: 'https://nextprutest.firebaseio.com',
    projectId: 'nextprutest',
    storageBucket: 'nextprutest.appspot.com',
    messagingSenderId: '160804080509',
    appId: '1:160804080509:web:3a23b0c3631422dd259a14',
    measurementId: 'G-P18MF6RPF6'
  });

  auth = initializeAuth(firebaseApp, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: browserLocalPersistence
  });
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser);

const signOut: Firebase['signOut'] = () => auth.signOut();

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user;
};

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback);
};

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser;

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser
};
