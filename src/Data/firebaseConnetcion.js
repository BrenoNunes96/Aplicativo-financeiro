// Importações do SDK Firebase necessárias
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  // <-- import do Realtime Database

// Configuração do Firebase (sua config)
const firebaseConfig = {
  apiKey: "AIzaSyCQIKqnPlpdz4lusuPEzoLnGJF0LpnfxNw",
  authDomain: "hpproject-65d6d.firebaseapp.com",
  databaseURL: "https://hpproject-65d6d-default-rtdb.firebaseio.com",
  projectId: "hpproject-65d6d",
  storageBucket: "hpproject-65d6d.firebasestorage.app",
  messagingSenderId: "192455258021",
  appId: "1:192455258021:web:b0aee42a3923cacc27024c",
  measurementId: "G-RKYEGXSLT9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics
const analytics = getAnalytics(app);

// Inicializa Realtime Database
const realtimeDb = getDatabase(app);  // <-- aqui

// Exporta o realtimeDb para usar em outros arquivos
export { realtimeDb };
