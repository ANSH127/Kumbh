// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdkTy2aHIOdWr-AxuMFVswshG46U-jDCs",
  authDomain: "kumbhmela-f863d.firebaseapp.com",
  projectId: "kumbhmela-f863d",
  storageBucket: "kumbhmela-f863d.firebasestorage.app",
  messagingSenderId: "724689945013",
  appId: "1:724689945013:web:51865f558cafc1933d99fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const  enquiryCollection = collection(db, 'enquiries');


export default app;