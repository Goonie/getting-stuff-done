import { useEffect, useState } from "react";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });
}

const firestore = firebase.firestore();

function useFirebaseUser() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  function signIn() {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(authProvider);
  }

  function signOut() {
    firebase.auth().signOut();
  }

  return { user, isLoading, signIn, signOut };
}

export { useFirebaseUser, firestore };
