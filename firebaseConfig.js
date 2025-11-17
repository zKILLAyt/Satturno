// Importa as funções principais do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFgqgG-Tq4gcDx77xwYA6t3kiqQGFkgNM",
  authDomain: "satturno-499f0.firebaseapp.com",
  projectId: "satturno-499f0",
  storageBucket: "satturno-499f0.firebasestorage.app",
  messagingSenderId: "723294674539",
  appId: "1:723294674539:web:d97adc535f584aa32e9b2e",
  measurementId: "G-8Y3GKXPPQ2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa Auth
const auth = getAuth(app);

// Exporta
export { app, auth };
