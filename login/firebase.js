// FIREBASE IMPORTS

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth,

signInWithEmailAndPassword,

createUserWithEmailAndPassword,

onAuthStateChanged,

signOut

} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// CONFIG FIREBASE

const firebaseConfig = {

apiKey: "AIzaSyC7yavV_N5DivE3f4EF6LgINdW1Ja7JbTg",

authDomain: "lego-tech-fll.firebaseapp.com",

projectId: "lego-tech-fll",

storageBucket: "lego-tech-fll.firebasestorage.app",

messagingSenderId: "986190698770",

appId: "1:986190698770:web:bf7bc8c3fd023878f5fbcb"

};


// INICIALIZAÇÃO

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// ELEMENTOS HTML

const email =
document.getElementById('email');

const senha =
document.getElementById('senha');

const status =
document.getElementById('status');


// LOGIN

document
.getElementById('login')
.addEventListener('click', ()=>{

signInWithEmailAndPassword(
auth,
email.value,
senha.value
)

.then(()=>{

status.innerHTML =
'✅ Login realizado!';

setTimeout(()=>{

window.location.href =
'../index.html';

},1000);

})

.catch((error)=>{

status.innerHTML =
'❌ ' + error.message;

});

});


// CADASTRO

document
.getElementById('cadastro')
.addEventListener('click', ()=>{

createUserWithEmailAndPassword(
auth,
email.value,
senha.value
)

.then(()=>{

status.innerHTML =
'✅ Conta criada com sucesso!';

})

.catch((error)=>{

status.innerHTML =
'❌ ' + error.message;

});

});


// VERIFICAR LOGIN

onAuthStateChanged(auth,(user)=>{

if(user){

console.log(
'Usuário logado:',
user.email
);

}

});