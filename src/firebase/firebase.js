import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDZcynKelWlnF0IfOqrutgSLPafUgDqkJo',
  authDomain: 'snapcatt-api.firebaseapp.com',
  projectId: 'snapcatt-api',
  storageBucket: 'snapcatt-api.appspot.com',
  messagingSenderId: '1065327948443',
  appId: '1:1065327948443:web:29cc696b67cb06a1708c3e',
  measurementId: 'G-HB8PW70SH9'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
