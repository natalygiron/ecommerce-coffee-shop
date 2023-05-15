// Validar que exista usuario y cambiar botón Cuenta / Cerrar sesión
function isLogged() {
    let user = JSON.parse(localStorage.getItem('myUser'));
    let cuenta = document.getElementById('account');
    
    if(user) {
        cuenta.innerHTML = `<a>Cerrar sesión</a>`

        cuenta.onclick = () => {
          localStorage.removeItem('myUser');
          cuenta.innerHTML = `<a href="./pages/login/login.html">Cuenta</a>`;
          Swal.fire({
            title: 'Bye!',
            icon: 'success',
            background: '#fff'
          }) 
        }
    }
}

isLogged();