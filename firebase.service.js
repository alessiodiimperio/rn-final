
  import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyCevBTljKs4dORBlEJflpU3WMAqiF6HGus",
    authDomain: "reactnative-finale.firebaseapp.com",
    projectId: "reactnative-finale",
    storageBucket: "reactnative-finale.appspot.com",
    messagingSenderId: "1079909485536",
    appId: "1:1079909485536:web:4d85daaccf19ed4328b985",
    measurementId: "G-2QTDSMZS0B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore
  export const auth = firebase.auth