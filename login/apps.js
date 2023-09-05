const firebaseConfig = {
    apiKey: "AIzaSyCzBwgSCm6h8TdnRA2syoKFYjex9qryg2A",
    authDomain: "projeto2miateste-7df70.firebaseapp.com",
    projectId: "projeto2miateste-7df70",
    storageBucket: "projeto2miateste-7df70.appspot.com",
    messagingSenderId: "904244570710",
    appId: "1:904244570710:web:24e36e8ca4cf2d0eece9f7"
  };

  firebase.initializeApp(firebaseConfig);

 /*
  const emailField=document.getElementById('email');
  const passwordField=document.getElementById('password');
  const loginButton=document.getElementById('loginButton');

  loginButton.addEventListener('click',()=>{
     const email=emailField.value;
     const password=passwordField.value;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log("Usuário logado : ", user)
  })
    .catch((error)=>{
        const errorMessage = error.message;
        console.error("Erro de autenticação : ", errorMessage)
    });
  });
  */

