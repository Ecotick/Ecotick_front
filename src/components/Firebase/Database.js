import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { config } from "./AccessFirebase";

const firebaseApp = initializeApp(config);

const db = getFirestore();
const storage = getStorage();

// ---------- Create ----------

export async function createUserDocument(Data) {
  try {
    await addDoc(collection(db, "Utilisateurs"), Data);
    console.log("Document written with ID: ", createUserDocument.UserId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// ---------- Read ----------

export async function readUserCollection() {
  const querySnapshot = await getDocs(collection(db, "Utilisateurs"));
  // const usersList = querySnapshot.docs.map((item) => item.data());
  // console.log(usersList);
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
  return querySnapshot;
}

export async function loadImage(image) {
  const imageRef = ref(storage, `images/${image}`);
  console.log(imageRef);
  const imageFile = await getDownloadURL(imageRef);
  console.log(imageFile);
  return imageFile;
}
// ---------- Update ----------

// ---------- Delete ----------
