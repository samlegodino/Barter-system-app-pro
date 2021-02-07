import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAZ3zREIqxQoOdd8xUeT29JHVgNXgEatsA",
  authDomain: "barter-app-6c7d5.firebaseapp.com",
  projectId: "barter-app-6c7d5",
  storageBucket: "barter-app-6c7d5.appspot.com",
  messagingSenderId: "487174619625",
  appId: "1:487174619625:web:3f4fffa19421db54dccb78"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
