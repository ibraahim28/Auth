const firebaseConfig = {
  apiKey: "AIzaSyAf_gv31uI8PhD2SZZzepMmVABOUIUVQ2I",
  authDomain: "login-signup-18565.firebaseapp.com",
  projectId: "login-signup-18565",
  storageBucket: "login-signup-18565.appspot.com",
  messagingSenderId: "719989297462",
  appId: "1:719989297462:web:3efb4b935a5aa0c517a397"
};

firebase.initializeApp(firebaseConfig)


function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-tab').classList.add('active-tab');
    document.getElementById('signup-tab').classList.remove('active-tab');
  }
  
  function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-tab').classList.add('active-tab');
    document.getElementById('login-tab').classList.remove('active-tab');
  }

  function signup_with_email () {
    var signup_email = document.getElementById("signup-email").value;
    var signup_password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(signup_email, signup_password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Account succesfully created")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("There has been an error in creating your account, please try again")
    // ..
  });
  }
  
  function login_with_email () {
    var login_password = document.getElementById("login-password").value;
    var login_email = document.getElementById("login-email").value;

    firebase.auth().signInWithEmailAndPassword(login_email, login_password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("Welcome back")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Please check email and password and try again")
  });
  }