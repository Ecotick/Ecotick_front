import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"
import { config } from "./AccessFirebase";

const store = initializeApp(config)

const db = getFirestore()

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
  const usersList = querySnapshot.docs.map((item) => item.data())
  console.log(usersList)
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
  return querySnapshot
}
// ---------- Update ----------

// ---------- Delete ----------