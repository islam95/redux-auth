import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEwFGi5swZeTSa35BGDlhHmx5Vpuc47fA",
  authDomain: "redux-auth-c9aba.firebaseapp.com",
  databaseURL: "https://redux-auth-c9aba.firebaseio.com",
  projectId: "redux-auth-c9aba",
  storageBucket: "redux-auth-c9aba.appspot.com",
  messagingSenderId: "48056767259"
};

export const firebaseApp = firebase.initializeApp(config);
