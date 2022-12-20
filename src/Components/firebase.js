import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBRNZDFTa8-ZVK_wTljyRRXo_nmmG6m5CQ",
  authDomain: "webapplication-c320b.firebaseapp.com",
  projectId: "webapplication-c320b",
  storageBucket: "webapplication-c320b.appspot.com",
  messagingSenderId: "499201702344",
  appId: "1:499201702344:web:489c10c51e55197b70a8fd",
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
