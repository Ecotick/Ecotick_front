import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword as FirebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  connectAuthEmulator,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  connectFirestoreEmulator,
  query,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  connectStorageEmulator,
} from "@firebase/storage";

import { config } from "./AccessFirebase";

initializeApp(config);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

if (window.location.hostname === "localhost") {
  console.warn("Using local Firestore");
  connectFirestoreEmulator(db, "localhost", "8080");
  console.warn("Using local Auth");
  connectAuthEmulator(auth, "http://localhost:9099/", {
    disableWarnings: true,
  });
  console.warn("Using local storage");
  connectStorageEmulator(storage, "localhost", "9199");
}

export const signInWithEmailAndPassword = async (email, password) => {
  const response = await FirebaseSignInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return response;
};

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const firebaseUser = auth.currentUser;
    return { initializing: !firebaseUser, firebaseUser };
  });

  function onChange(firebaseUser) {
    setState({ initializing: false, firebaseUser });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onChange);

    return () => unsubscribe();
  }, []);

  return state;
};

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

export async function readUserCollectionCommerce() {
  const querySnapshot = await query(
    collection(db, "Utilisateurs"),
    where("Commerce", "==", true)
  );
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
