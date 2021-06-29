import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyC6bnDRkGgEcncwrQKok9yG8z3gsGSf2c8",
	authDomain: "crwn-db-268fd.firebaseapp.com",
	projectId: "crwn-db-268fd",
	storageBucket: "crwn-db-268fd.appspot.com",
	messagingSenderId: "1092665745523",
	appId: "1:1092665745523:web:ef81b0e7c3e4d57561ca06",
	measurementId: "G-JR3ZBT2FQC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
