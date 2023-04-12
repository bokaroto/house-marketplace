// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBiKC6GrtZB19YRNpz1AIlOC4zpMd2KUK8',
  authDomain: 'house-marketplace-app-42849.firebaseapp.com',
  projectId: 'house-marketplace-app-42849',
  storageBucket: 'house-marketplace-app-42849.appspot.com',
  messagingSenderId: '672178403103',
  appId: '1:672178403103:web:95b401fbc3c4f15ec5222a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
