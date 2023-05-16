// Guardar el login_form en una variable
const loginForm = document.getElementById('loginform');

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
        Swal.fire({
            title: 'Login incorrecto',
            icon: 'warning'
        });

        return;
    }

    localStorage.setItem('myUser', JSON.stringify(myUser));

    //TODO: insertar alerta custom
    Swal.fire('¡Hola de nuevo!');

    setTimeout(()=>{
        window.location.href = '/'; 
    }, 1500);
})