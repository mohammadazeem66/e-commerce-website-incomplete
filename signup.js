// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore , collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDcARjDxUZ7hb96hXxLsBgWTzVePb6frow",
    authDomain: "e-commerce-website-ef9ca.firebaseapp.com",
    projectId: "e-commerce-website-ef9ca",
    storageBucket: "e-commerce-website-ef9ca.appspot.com",
    messagingSenderId: "567236502350",
    appId: "1:567236502350:web:80406238ebd66af150f41f",
    measurementId: "G-YSTC250058"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
  
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  

// const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;

try {
  const docRef = await addDoc(collection(db, "users"), {

    name: name,
    email: email,
    password: password

  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

 alert("Done")

    location.href="./Login.html"
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  });
