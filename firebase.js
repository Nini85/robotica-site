// Firebase APP
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase AUTH
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// FIRESTORE
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

// Inicializa Firestore
const db = getFirestore(app);

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

// =====================================
// TESTE FIRESTORE
// =====================================

// SALVAR TESTE
async function salvarTeste() {

  try {

    await addDoc(collection(db, "teste"), {

      nome: "LEGO TECH",
      data: new Date().toLocaleString()

    });

    console.log("Documento salvo!");

  } catch (e) {

    console.error("Erro:", e);

  }

}

// LER TESTE
async function lerTeste() {

  const querySnapshot =
    await getDocs(collection(db, "teste"));

  querySnapshot.forEach((docItem) => {

    console.log(docItem.id, " => ", docItem.data());

  });

}

// Executa testes
salvarTeste();

lerTeste();

async function salvarTeste() {

  try {

    const docRef = await addDoc(
      collection(db, "teste"),
      {
        nome: "LEGO TECH",
        data: new Date().toLocaleString()
      }
    );

    console.log("SALVO!", docRef.id);

  } catch (error) {

    console.error("ERRO:", error);

  }

}

salvarTeste();