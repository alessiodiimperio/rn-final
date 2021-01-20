
  import firebase from 'firebase'

  const firebaseConfig = {
      apiKey: "AIzaSyATHG5y7w760o_v81amww21GPP2LpG0pMI",
      authDomain: "rn-finale.firebaseapp.com",
      projectId: "rn-finale",
      storageBucket: "rn-finale.appspot.com",
      messagingSenderId: "416139991473",
      appId: "1:416139991473:web:34bbdd4d7a875e3beb4590",
  };
  firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore
  export const auth = firebase.auth