import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../helpers/firebase-config";

const productosRef = collection(db, "productos");

const getData = () => {
  return new Promise(async (resolve, reject) => {
    const data = await getDocs(productosRef)
      .then((data) => {
        return data.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("FIREBASE DATA: ", data);
    resolve(data);
  });
};

export const getRandomData = async (limit = 10) => {
  return new Promise((resolve, reject) => {
    let storage = sessionStorage.getItem("recipes") || null;
    if (!!storage) {
      setTimeout(() => resolve(JSON.parse(storage)), 1000);
    } else {
      setTimeout(async () => {
        let firebaseData = await getData();
        console.log("DATOS DE API: ", firebaseData);
        sessionStorage.setItem("recipes", JSON.stringify(firebaseData));
        resolve(firebaseData);
      }, 2000);
    }
  });
};

export const getDatabyID = (id) => {
  return new Promise(async (resolve, reject) => {
    const q = query(productosRef, where(documentId, "==", id));
    const receta = await getDocs(q);
    console.log("RECETA: ", receta);
  });
};
