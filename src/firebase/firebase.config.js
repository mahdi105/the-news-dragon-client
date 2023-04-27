// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKACaIU8PXdsbnPek26DuhsrvLuU3_KSw",
  authDomain: "the-news-dragon-client-e028c.firebaseapp.com",
  projectId: "the-news-dragon-client-e028c",
  storageBucket: "the-news-dragon-client-e028c.appspot.com",
  messagingSenderId: "601103031796",
  appId: "1:601103031796:web:2dc01b0c985b53b57f6da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;