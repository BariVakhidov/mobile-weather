import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDe3ZB8vucdk3GA0XRl4m7ZOu3RJ3-MvBA",
    authDomain: "chat-fbf05.firebaseapp.com",
    projectId: "chat-fbf05",
    storageBucket: "chat-fbf05.appspot.com",
    messagingSenderId: "660728828815",
    appId: "1:660728828815:web:ee50ca73b7789ac63af1fa",
    measurementId: "G-BRGBGJ198S"
});

export const appAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
