import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_8WghVnmGLFITU8Kq1TTqGuOgm34u9p0",
  authDomain: "nextfire-app-16c30.firebaseapp.com",
  projectId: "nextfire-app-16c30",
  storageBucket: "nextfire-app-16c30.appspot.com",
  messagingSenderId: "158349170914",
  appId: "1:158349170914:web:8ed0d7063309efc8eee6bb",
  measurementId: "G-EWTDKM60QP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
