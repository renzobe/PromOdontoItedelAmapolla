  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js" 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB-mrT4My67YN406xwDnVY1BwpBQ1KXEL8",
    authDomain: "itedel-aba28.firebaseapp.com",
    projectId: "itedel-aba28",
    storageBucket: "itedel-aba28.appspot.com",
    messagingSenderId: "670373851173",
    appId: "1:670373851173:web:24b72bef7835d5bb038fcc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const conecc = getFirestore();

export const guardar_cliente = (nombre,celular,correo,fuente) =>{
    //Agregando  
    addDoc(collection(conecc,'amapola'),{nombre,celular,correo,fuente})

}
