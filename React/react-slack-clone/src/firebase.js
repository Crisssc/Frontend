import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyBLYLCCgK46G-tbtoZiKjE9qaqYLIPTu7U',
  authDomain: 'react-slack-clone-7e513.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-7e513.firebaseio.com',
  projectId: 'react-slack-clone-7e513',
  storageBucket: 'react-slack-clone-7e513.appspot.com',
  messagingSenderId: '1078880848635',
  appId: '1:1078880848635:web:6474e4f8960256f51dfe5e',
  measurementId: 'G-0LFDCH3P3B',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
