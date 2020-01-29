import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp6Xx8XPp1503BW7iQmcN4RaDo05RABV0",
  authDomain: "fashmuyhee-project.firebaseapp.com",
  databaseURL: "https://fashmuyhee-project.firebaseio.com",
  projectId: "fashmuyhee-project",
  storageBucket: "fashmuyhee-project.appspot.com",
  messagingSenderId: "783171703225",
  appId: "1:783171703225:web:e880e479a0f79cc88e2668"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
