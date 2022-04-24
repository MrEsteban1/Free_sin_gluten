import { async } from "@firebase/util";
import {
  collection,
  documentId,
  getDocs,
  orderBy,
  query,
  where,
  addDoc,
  doc,
} from "firebase/firestore";
import { db } from "../helpers/firebase-config";

const productosRef = collection(db, "productos");
const ordenesRef = collection(db,"ordenes");

class firebase {
  getData(limit = 10) {
    return new Promise(async (resolve, reject) => {
      const q = query(productosRef);
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

   addOrder(buyer) {
    return new Promise(async(resolve, reject) => {
        const docRef = await addDoc(ordenesRef,{...buyer})
        resolve(docRef.id)
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
    // let storage = sessionStorage.getItem("recipes") || null;
    // if (!!storage) {
    //   setTimeout(() => resolve(JSON.parse(storage)), 1000);
    // } else {
    setTimeout(async () => {
      let firebaseData = await FirebaseClient.getData(limit);
      // sessionStorage.setItem("recipes", JSON.stringify(firebaseData));
      resolve(firebaseData);
    }, 2000);
    //}
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
    resolve({ id: receta.docs[0].id, ...receta.docs[0].data() });
  });
};

export const addOrder = async(buyer) => {
  let id
  await FirebaseClient.addOrder(buyer).then(res => id = res)
  console.log("ID: ", id)

  return id
}