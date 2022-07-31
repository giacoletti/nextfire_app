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

// Helper functions
//
// Gets a users/{uid} document with username
// param: {string} username
//
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

// Converts a firestore document to JSON
// param: {DocumentSnapshot} doc
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(), // firestore timestamp is not serializable to JSON, must convert to milliseconds
    updatedAt: data.updatedAt.toMillis()
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
