import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const getCurrentSignedInUser = (fn) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      fn(user);
      // ...
    } else {
      // User is signed out
      fn(null)
    }
  });
};

const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

const resetPasswordUsingEmail = (email) =>{
  return sendPasswordResetEmail(auth,email)
   
}

const logOut = ()=>{
  return signOut(auth)
}

export const authInfo = {
  createUser: createUser,
  loginUser: loginUser,
  getCurrentSignedInUser: getCurrentSignedInUser,
  signInWithGoogle: signInWithGoogle,
  resetPasswordUsingEmail: resetPasswordUsingEmail,
  logOut:logOut
};

const AuthContext = createContext(authInfo);

export default AuthContext;
