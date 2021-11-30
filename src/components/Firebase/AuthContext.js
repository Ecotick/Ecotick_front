import { useEffect, createContext, useState } from "react";
import { useAuth, readUser } from "./index";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { initializing, firebaseUser } = useAuth();

  useEffect(() => {
    if (!initializing) {
      console.log(firebaseUser);
      if (firebaseUser?.uid) {
        readUser(firebaseUser.uid).then((firestoreUser) => {
          if (firestoreUser) {
            console.log(firestoreUser);
            setUser(firestoreUser);
          } else {
            console.log("Pas d'utilisateur en base");
          }
        });
      } else {
        setUser(firebaseUser);
      }
    }
  }, [initializing, firebaseUser]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
