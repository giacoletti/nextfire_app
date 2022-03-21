// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { attachCustomCommands } from "cypress-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_8WghVnmGLFITU8Kq1TTqGuOgm34u9p0",
  authDomain: "nextfire-app-16c30.firebaseapp.com",
  projectId: "nextfire-app-16c30",
  storageBucket: "nextfire-app-16c30.appspot.com",
  messagingSenderId: "158349170914",
  appId: "1:158349170914:web:8ed0d7063309efc8eee6bb",
  measurementId: "G-EWTDKM60QP"
};

firebase.initializeApp(firebaseConfig);

attachCustomCommands({ Cypress, cy, firebase });
