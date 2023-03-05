// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrf97PGOQh7ZGgtsDBVVFVz55lvOT4m9g',
  authDomain: 'card-b33d6.firebaseapp.com',
  projectId: 'card-b33d6',
  storageBucket: 'card-b33d6.appspot.com',
  messagingSenderId: '437856544898',
  appId: '1:437856544898:web:f51ea86771d243c4f1ec9b',
  measurementId: 'G-Q0Y1VK2Q5T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
