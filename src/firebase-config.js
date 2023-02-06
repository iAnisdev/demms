import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAYHEnpEE6mCVYSPX4hICfj1ksWlVdbxOQ",
    authDomain: "digital-meter-72a4d.firebaseapp.com",
    projectId: "digital-meter-72a4d",
    storageBucket: "digital-meter-72a4d.appspot.com",
    messagingSenderId: "965460698716",
    appId: "1:965460698716:web:eda0b77442a034e8a86899",
    measurementId: "G-HNM03G2QNC"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

