function logiEmail(){
    var  email = document.getElementById('email').value;
    var  password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user =>{
      console.log('usuario', user);
      alert ("Usuario criado e logado");
    })catch(err=>{
      console.error("Erro ao criar usuario", err);
    });
    }

