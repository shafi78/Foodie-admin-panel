import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQc6MEb9W53AhPmHuZsZFK9NVU0lA2uEE",
  authDomain: "foodapp-469e9.firebaseapp.com",
  projectId: "foodapp-469e9",
  storageBucket: "foodapp-469e9.appspot.com",
  messagingSenderId: "155588882253",
  appId: "1:155588882253:web:06b52fab9f15997a0ed104"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export  { db, storage};