import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBuUbx8Hxva5oyPCSAAdGp9nBkzbaK1t6M",
  authDomain: "lifesum-clone.firebaseapp.com",
  projectId: "lifesum-clone",
  storageBucket: "lifesum-clone.appspot.com",
  messagingSenderId: "87225916127",
  appId: "1:87225916127:web:2a81ab0a4faf08b270e76a"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;