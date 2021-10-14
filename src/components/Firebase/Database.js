import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"
import { config } from "./AccessFirebase";

const store = initializeApp(config)

const db = getFirestore()

// ---------- Create ----------

export async function createUserDocument(Data) {
  debugger
  try {
    await addDoc(collection(db, "Utilisateurs"), Data);
    console.log("Document written with ID: ", createUserDocument.UserId);
    debugger
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// ---------- Read ----------

// ---------- Update ----------

// ---------- Delete ----------