// libraries:
import { app } from "../config/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// authentication:
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
