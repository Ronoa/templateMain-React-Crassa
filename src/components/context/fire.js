// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_APPID,
} = process.env

console.log(
  'Jose ~ file: fire.js ~ line 13 ~ REACT_APP_FIREBASE_APIKEY',
  REACT_APP_FIREBASE_APIKEY
)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyB5d3SNbxuLO9wZ4XmbwlV-E0leF2_c_d8',
//   authDomain: 'logintemplate-88cf7.firebaseapp.com',
//   projectId: 'logintemplate-88cf7',
//   storageBucket: 'logintemplate-88cf7.appspot.com',
//   messagingSenderId: '455610303211',
//   appId: '1:455610303211:web:8fe37735999f952fbb74ae',
// }

// Initialize Firebase
initializeApp(firebaseConfig)
// const app =
export const auth = getAuth()
