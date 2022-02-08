// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvbsmdOjbo0kwjta7oeQqZxJiE4Znw78U",
  authDomain: "ethio-ride-286b9.firebaseapp.com",
  projectId: "ethio-ride-286b9",
  storageBucket: "ethio-ride-286b9.appspot.com",
  messagingSenderId: "127729706021",
  appId: "1:127729706021:web:ea556bc72a442c3eaccbcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const auth=getAuth()
export {app,provider,auth}
