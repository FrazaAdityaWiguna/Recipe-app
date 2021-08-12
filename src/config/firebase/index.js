import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: 'AIzaSyC1gcEuG56Be7ckKD3cllKwwtXe4HJG3ac',
  authDomain: 'test-login-firebase-496eb.firebaseapp.com',
  databaseURL: 'https://test-login-firebase-496eb-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'test-login-firebase-496eb',
  storageBucket: 'test-login-firebase-496eb.appspot.com',
  messagingSenderId: '41549930671',
  appId: '1:41549930671:web:07ffc13c802c8acc35745a',
  measurementId: 'G-H1NZ5M8D0B',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = firebase.database();

export default firebase;
