// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { apiRandomData } from "../services/spoonacularAPI";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw0KR0Zk0rJs0URStyEqjUTQu7aDNg33U",
  authDomain: "free-sin-gluten.firebaseapp.com",
  projectId: "free-sin-gluten",
  storageBucket: "free-sin-gluten.appspot.com",
  messagingSenderId: "9468949076",
  appId: "1:9468949076:web:b35606bf162d9814c6f3c1",
  measurementId: "G-EJGKKR8M5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
const productsRefCollection = collection(db, "productos");

export const insertDataFirebase = async () => {
  const data = await apiRandomData();
  console.log("DATA:", data.recipes);
  data.recipes.forEach(async (data) => {
    await addDoc(productsRefCollection, {
      nombre: data.title,
      imagen: data.image,
      precio: (data.servings * data.pricePerServing).toFixed(2),
      calorias: data.spoonacularScore,
    });
  });
};
