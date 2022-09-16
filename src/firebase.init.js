// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr-pVv9xcsZVE15-BWX-n-TkLdnVDCHBw",
    authDomain: "dating-app-ea568.firebaseapp.com",
    projectId: "dating-app-ea568",
    storageBucket: "dating-app-ea568.appspot.com",
    messagingSenderId: "245787852191",
    appId: "1:245787852191:web:78bfb8ee2748781adcd1aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;