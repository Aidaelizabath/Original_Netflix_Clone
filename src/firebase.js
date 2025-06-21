import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDHn81p2lBtDoy9_BVF_JJIjJnikZpDXTo",
  authDomain: "netflix-clone-project-83c61.firebaseapp.com",
  projectId: "netflix-clone-project-83c61",
  storageBucket: "netflix-clone-project-83c61.firebasestorage.app",
  messagingSenderId: "84575287952",
  appId: "1:84575287952:web:768d61dcc7ab318f803615",
  measurementId: "G-M4DWCKMQFE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    const msg = error.code?.split('/')[1]?.replace(/-/g, ' ') || "Signup failed";
    toast.error(msg);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    const msg = error.code?.split('/')[1]?.replace(/-/g, ' ') || "Login failed";
    toast.error(msg);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error("Logout failed");
    console.error(error);
  }
};

export { auth, db, login, signup, logout };

