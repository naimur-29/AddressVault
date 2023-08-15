// libraries:
import { app } from "../config/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

// database (firestore):
const db = getFirestore(app);

// authentication:
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const getUsersRef = (id: string): any => doc(db, "users", id);
