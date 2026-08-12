import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLG0ePGzJNQ2gCNl17pPKzfTVccZnNMb4",
  authDomain: "english-ai-game-grade9.firebaseapp.com",
  projectId: "english-ai-game-grade9",
  storageBucket: "english-ai-game-grade9.firebasestorage.app",
  messagingSenderId: "393165442741",
  appId: "1:393165442741:web:85ace090c383029dea78fc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;