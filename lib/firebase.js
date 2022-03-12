import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_8WghVnmGLFITU8Kq1TTqGuOgm34u9p0",
  authDomain: "nextfire-app-16c30.firebaseapp.com",
  projectId: "nextfire-app-16c30",
  storageBucket: "nextfire-app-16c30.appspot.com",
  messagingSenderId: "158349170914",
  appId: "1:158349170914:web:8ed0d7063309efc8eee6bb",
  measurementId: "G-EWTDKM60QP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
