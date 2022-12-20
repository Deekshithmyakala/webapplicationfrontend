import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBhchj5lW_4BhU2k4NjYnAGztuESoV7lRk",
  authDomain: "webapplication-df581.firebaseapp.com",
  projectId: "webapplication-df581",
  storageBucket: "webapplication-df581.appspot.com",
  messagingSenderId: "90365723980",
  appId: "1:90365723980:web:f5c73a16dee19ef7c2fbe9"
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
