// firebase app config
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

auth.onAuthStateChanged(function (user){
  if (user){
    var email = user.email;
    var users = document.getElementById("user");
    var text = document.createTextNode(email);
    user.appendChild(text);
    console.log(user);
    //signed in
    } else {
      alert ("user not authenticated, kindly login or signup");
      window.location = "index.html";
    }
});

//signout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout clicked");
  auth.signOut();
  alert("signed out");
  window.location = "index.html";
});