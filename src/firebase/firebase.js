import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAZQZOKXpH7VCUAcBhPqiVTNtbVUTlTg7k',
  authDomain: 'snapcattapi.firebaseapp.com',
  projectId: 'snapcattapi',
  storageBucket: 'snapcattapi.appspot.com',
  messagingSenderId: '444863578937',
  appId: '1:444863578937:web:09c1c4b431e2e25a7c5ee8',
  measurementId: 'G-TZE6VNR3QC'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
