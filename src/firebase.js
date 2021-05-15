import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCbtCGxqu4y8TYeVxUfe2hK9FZMtYZ-yx8",
    authDomain: "disneyplus-clone-211a5.firebaseapp.com",
    projectId: "disneyplus-clone-211a5",
    storageBucket: "disneyplus-clone-211a5.appspot.com",
    messagingSenderId: "38430073795",
    appId: "1:38430073795:web:dac100067f388ba6ca1376",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;