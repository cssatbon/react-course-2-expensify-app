import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDmTmNVggxqw_z5e_Hxlb2G781NudpQqdg",
  authDomain: "expensify-e9110.firebaseapp.com",
  projectId: "expensify-e9110",
  storageBucket: "expensify-e9110.appspot.com",
  messagingSenderId: "788125378821",
  appId: "1:788125378821:web:fdc9592f8c093c11242f6c"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.googleProvider();

export { firebase, googleAuthProvider, database as default };