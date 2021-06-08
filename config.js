import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAR72cGLl6I_plysieopo_GfBOergip_ac",
    authDomain: "wily-aa372.firebaseapp.com",
    projectId: "wily-aa372",
    storageBucket: "wily-aa372.appspot.com",
    messagingSenderId: "691677862339",
    appId: "1:691677862339:web:1434eba5c2a5e075c7c576"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();