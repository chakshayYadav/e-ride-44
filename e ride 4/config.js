import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDxujqHwSNmA3ur4nBRFWqKhxBx47zoOYY",
  authDomain: "e-ride-f8994.firebaseapp.com",
  projectId: "e-ride-f8994",
  storageBucket: "e-ride-f8994.appspot.com",
  messagingSenderId: "1082651400126",
  appId: "1:1082651400126:web:dc343fddf666e6a7908bef"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
