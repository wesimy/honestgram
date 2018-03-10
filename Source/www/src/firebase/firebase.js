import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAuiSb6wNTLfPMxLcGKrTLUi_PL3oxs44c",
    authDomain: "honestgram-49ad0.firebaseapp.com",
    databaseURL: "https://honestgram-49ad0.firebaseio.com",
    projectId: "honestgram-49ad0",
    storageBucket: "honestgram-49ad0.appspot.com",
    messagingSenderId: "31439273994"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

export const database = firebase.database();
export const auth = firebase.auth();

