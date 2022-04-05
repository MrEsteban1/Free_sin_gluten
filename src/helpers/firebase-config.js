import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw0KR0Zk0rJs0URStyEqjUTQu7aDNg33U",
  authDomain: "free-sin-gluten.firebaseapp.com",
  projectId: "free-sin-gluten",
  storageBucket: "free-sin-gluten.appspot.com",
  messagingSenderId: "9468949076",
  appId: "1:9468949076:web:b35606bf162d9814c6f3c1",
  measurementId: "G-EJGKKR8M5K",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
