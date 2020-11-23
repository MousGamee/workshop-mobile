import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDRWnp3x-FaYL8VDBmB0tQS4Ry1ZUnQEPE",
    authDomain: "workshop-76db5.firebaseapp.com",
    databaseURL: "https://workshop-76db5.firebaseio.com",
    projectId: "workshop-76db5",
    storageBucket: "workshop-76db5.appspot.com",
    messagingSenderId: "698534577945",
    appId: "1:698534577945:web:5e68806b462a9bae72a788",
    measurementId: "G-NQJ49F42XL"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase