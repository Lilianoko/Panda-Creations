
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfA4PZG1X6Jk54QeXCwiuRgscPVX70fAU",
  authDomain: "authentication-project-20.firebaseapp.com",
  projectId: "authentication-project-20",
  storageBucket: "authentication-project-20.appspot.com",
  messagingSenderId: "951363305354",
  appId: "1:951363305354:web:a7d64dddbdb296fc925273"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//signup function
let signupButton = document.getElementById("signup");
signupButton.addEventListener("click", (e) =>{
  //prevent default form submission behaviour
  e.preventDefault();
  console.log("clicked");


  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

auth
.createUserWithEmailAndPassword(email.value, password.value)
.then((userCredential) =>{
  location.reload();
  alert("user signed up successful");

  //signed in

  var user = userCredential.user;
  console.log("user, user.email");

})

.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console. log("error code", errorCode);
  console. log("error Message", errorMessage);
  alert(errorMessage);
});


});


//SIGNIN FUNCTION

let signInButton = document.getElementById("signin")
signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sign in clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
  .signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("user", user.email);
    window.location = "home.html";
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  
});

});