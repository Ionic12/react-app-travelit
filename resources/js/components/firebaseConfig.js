import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCP0skc0MEdhMxW8K_5TSJWN7IIZkDqMLs",
    authDomain: "fallfromthesky-17048.firebaseapp.com",
    databaseURL: "https://fallfromthesky-17048-default-rtdb.firebaseio.com",
    projectId: "fallfromthesky-17048",
    storageBucket: "fallfromthesky-17048.appspot.com",
    messagingSenderId: "1043323501483",
    appId: "1:1043323501483:web:5fd698f42ee4f9968930ee"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };