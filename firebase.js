// Firebase APP
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase AUTH
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// CONFIGURAÇÃO FIREBASE
const firebaseConfig = {

  apiKey: "AIzaSyDJOjwgtMzXG-2EMcQFtOl_bZGynu64L8k",

  authDomain: "robotica-site.firebaseapp.com",

  projectId: "robotica-site",

  storageBucket: "robotica-site.firebasestorage.app",

  messagingSenderId: "841681525893",

  appId: "1:841681525893:web:6dab372839e0993bc15dec"

};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth
const auth = getAuth(app);

console.log("Firebase conectado!");

// ===============================
// CRIAR CONTA
// ===============================

const cadastro = document.getElementById("cadastro");

cadastro.addEventListener("click", async () => {

  const email = document.getElementById("email").value;

  const senha = document.getElementById("senha").value;

  try {

    await createUserWithEmailAndPassword(auth, email, senha);

    document.getElementById("status").innerText =
      "Conta criada com sucesso!";

  } catch (error) {

    document.getElementById("status").innerText =
      error.message;

  }

});

// ===============================
// LOGIN
// ===============================

const login = document.getElementById("login");

login.addEventListener("click", async () => {

  const email = document.getElementById("email").value;

  const senha = document.getElementById("senha").value;

  try {

    await signInWithEmailAndPassword(auth, email, senha);

    document.getElementById("status").innerText =
      "Login realizado!";

    // Redireciona para o site
    window.location.href = "index02.html";

  } catch (error) {

    document.getElementById("status").innerText =
      error.message;
  }

});