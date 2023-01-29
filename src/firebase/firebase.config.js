import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBehF1D5I8wo2igicYDOv59KornQffoulw",
    authDomain: "jobbox-redux-7b0cd.firebaseapp.com",
    projectId: "jobbox-redux-7b0cd",
    storageBucket: "jobbox-redux-7b0cd.appspot.com",
    messagingSenderId: "563220117639",
    appId: "1:563220117639:web:43c74de327302e3539a022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
