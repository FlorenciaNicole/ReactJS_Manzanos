import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOAQ6QJkdj5xkIG5hiYkZ_sR3qWGSsy7k",
  authDomain: "flohrwedding-357a2.firebaseapp.com",
  projectId: "flohrwedding-357a2",
  storageBucket: "flohrwedding-357a2.appspot.com",
  messagingSenderId: "835544742705",
  appId: "1:835544742705:web:6b265ccafb8de13b7ece10"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const collectionRef = collection(firestore, "Productos");
  let respuesta = await getDocs(collectionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(firestore, "Productos", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "Productos");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export default firestore;