import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChO_AdQqMZIXV5GPLgaUJgBhTbSEN0nyE",
    authDomain: "al-mehmood-3893d.firebaseapp.com",
    projectId: "al-mehmood-3893d",
    storageBucket: "al-mehmood-3893d.firebasestorage.app",
    messagingSenderId: "536400039202",
    appId: "1:536400039202:web:b9901890d29b7d8422e97b",
    measurementId: "G-ZG3CHYDSRF"
};  

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
