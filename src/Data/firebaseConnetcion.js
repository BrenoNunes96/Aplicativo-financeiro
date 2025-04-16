// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// ✅ Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAC5cDTswupquT8iSJFCw4ULyBRbIwGbyI",
  authDomain: "projetctfinalie.firebaseapp.com",
  projectId: "projetctfinalie",
  storageBucket: "projetctfinalie.firebasestorage.app",
  messagingSenderId: "659082406552",
  appId: "1:659082406552:web:41ca73f7a348a6addcbeed",
  measurementId: "G-NK1GM3X21Q"
};
// ✅ Inicializa o app Firebase
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Inicializa os serviços
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const rtdb = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);
export { firebaseApp, auth, db, rtdb as realtimeDb, storage };
