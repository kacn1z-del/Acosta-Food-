// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBLVHsF0VqPorPkK0auaWUH_4-k-loC6iU",
  authDomain: "acosta-food.firebaseapp.com",
  projectId: "acosta-food",
  storageBucket: "acosta-food.firebasestorage.app",
  messagingSenderId: "605529235094",
  appId: "1:605529235094:web:035dff54f04af00654acb7",
  measurementId: "G-QWEN1MWXXZ"
};

// Evita inicializar 2 veces en React Native
const app = getApps().length === 0? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;