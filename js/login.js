// Guardar el login_form en una variable
const loginForm = document.getElementById('loginform');

// Guardar el array en el localStorage
// id, fullname, dni, email, phone, password, gender.
// let users = [{fullname: 'nataly', dni:'70080090',email:'nat22@gmail.com',password: '123456Nat', phone:998001400, gender:'F'}];
// Se crea y guarda en localStorage despues de JSON stringify
// localStorage.setItem('users', JSON.stringify(users));

// Obtener el arreglo de localStorage y JSON.parse
// var array = JSON.parse(localStorage.getItem('users'));
// console.log(array)
// Obtener data del login_form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const {email, password} = loginForm.elements;
    console.log(email.value, ' ', password.value)

    // Obtener usuarios desde localstorage
    const usersList = JSON.parse(localStorage.getItem('users')) || [];

    const myUser = usersList.find((user) => {
        if(user.email === email.value) {
            return true;
        }
    })
    if(!myUser || myUser.password !== password.value){
        alert('Login incorrecto', 'error')
        return;
    }

    localStorage.setItem('myUser', JSON.stringify(myUser))

        //TODO: insertar alerta custom
    alert('¡Login exitoso!')

        setTimeout(()=>{
            window.location.href = '/'; 
        },1200)
    
})

