import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  // apiKey: "AIzaSyDih9G9fTLD37vvtIaGokAIAHpGr6jNHdE",
  // authDomain: "aircnc-24afa.firebaseapp.com",
  // projectId: "aircnc-24afa",
  // storageBucket: "aircnc-24afa.appspot.com",
  // messagingSenderId: "956242492109",
  // appId: "1:956242492109:web:a1e16e9a50821f89c20784",

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export default app;
