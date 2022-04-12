import {
  collection,
  documentId,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../helpers/firebase-config";

const productosRef = collection(db, "productos");

class firebase {
  getData(limit = 10) {
    return new Promise(async (resolve, reject) => {
      const q = query(productosRef, orderBy("name"), limit(limit));
      const data = await getDocs(q)
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
  }

  getDataByCategory(category) {
    return new Promise(async (resolve) => {
      const q = query(productosRef, where("tipo", "==", category));
      const data = await getDocs(q).then((res) => {
        return res.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
      });
      setTimeout(() => resolve(data), 1000);
    });
  }
}

const FirebaseClient = new firebase();

// const getData = () => {
//   return new Promise(async (resolve, reject) => {
//     const data = await getDocs(productosRef)
//       .then((data) => {
//         return data.docs.map((doc) => {
//           return {
//             id: doc.id,
//             ...doc.data(),
//           };
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     console.log("FIREBASE DATA: ", data);
//     resolve(data);
//   });
// };

export const getRandomData = async (limit = 10) => {
  return new Promise((resolve, reject) => {
    let storage = sessionStorage.getItem("recipes") || null;
    if (!!storage) {
      setTimeout(() => resolve(JSON.parse(storage)), 1000);
    } else {
      setTimeout(async () => {
        let firebaseData = await FirebaseClient.getData(limit);
        console.log("DATOS DE API: ", firebaseData);
        sessionStorage.setItem("recipes", JSON.stringify(firebaseData));
        resolve(firebaseData);
      }, 2000);
    }
  });
};

export const getDataByCategory = (category) => {
  return new Promise(async (resolve) => {
    const data = await FirebaseClient.getDataByCategory(category);
    resolve(data);
  });

  // return new Promise((resolve) => {

  // });
};

export const getDatabyID = (id) => {
  return new Promise(async (resolve, reject) => {
    const q = query(productosRef, where(documentId(), "==", id));
    const receta = await getDocs(q);
    console.log("RECETA: ", {
      id: receta.docs[0].id,
      ...receta.docs[0].data(),
    });
    resolve({ id: receta.docs[0].id, ...receta.docs[0].data() });
  });
};
