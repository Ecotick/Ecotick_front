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
  getDoc,
  getDocs,
  connectFirestoreEmulator,
  query,
  where,
  doc,
  setDoc,
  onSnapshot,
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

// ---------- Create ----------

export async function createUserDocument(userId, data) {
  try {
    await setDoc(doc(db, "appUsers", userId), {
      ...data,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// ---------- Read ----------

export async function readUser(userId) {
  const docRef = doc(db, "appUsers", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = await docSnap.data();
    console.log(data);
    return data;
  } else {
    // doc.data() will be undefined in this case
    return false;
  }
}

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

export const login = async (email, password) => {
  const response = await FirebaseSignInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return response;
};

export const signUp = async (email, password, pseudo) => {
  const newUser = (await createUserWithEmailAndPassword(auth, email, password))
    .user;
  // TODO gerer les erreur liés à la bonne création de compte
  createUserDocument(newUser.uid, { email: newUser.email, pseudo }); //TODO - ajouter pseudo dans les infos connexion
};

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
