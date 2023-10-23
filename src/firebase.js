import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyFnMmTwUW2WnNaF8spbL3ebaK63BUadQ",
  authDomain: "chat-4230e.firebaseapp.com",
  projectId: "chat-4230e",
  storageBucket: "chat-4230e.appspot.com",
  messagingSenderId: "670826008909",
  appId: "1:670826008909:web:c39775f7d1479ec16fe704",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
