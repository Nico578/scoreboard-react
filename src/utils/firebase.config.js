import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore} from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBvSc70xMl1EcRWnuFk5PvBAWjoU9QalzE",
  authDomain: "scoreboard-react-redux.firebaseapp.com",
  projectId: "scoreboard-react-redux",
  storageBucket: "scoreboard-react-redux.appspot.com",
  messagingSenderId: "184292061569",
  appId: "1:184292061569:web:069a3690f4c5505d303880",
  measurementId: "G-0KZKGBDPCG"
});

export const auth = app.auth();
export const db = getFirestore();
export default app
