// Guardar el registerForm en una variable
const registerForm = document.getElementById('registerForm');

// Guardar el el boton de registro en una variable
const registerBtn = document.getElementById('registerbtn');

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = e.target.elements

    // Obtener usuarios
    const users = JSON.parse(localStorage.getItem('users')) || []; 

    // Validar que no exista un usuario con ese email o DNI
    const userExist = validateUser(users, data.email.value, data.dni.value);
    

    console.log('exist ',userExist);

    if (userExist) return Swal.fire(`Este usuario ya está registrado`);
    if (data.password.value !== data.confirm_password.value) return Swal.fire(`Las contraseñas no coinciden`);

    // Validar contraseñas sean iguales
    // if(data.password.value !== data.confirm_password.value) return 

    // index, fullname, dni, email, phone, password, confirm_password, gender.
    const user = {
        fullname: data.fullname.value,
        dni: data.dni.value,
        email: data.email.value,
        phone:  data.phone.value,
        password: data.password.value,
        confirm_password: data.confirm_password.value,
        gender: data.gender.value,
        rol: 'USER'
    }

    // Insertar nuevo usuario en array users
    users.push(user);

    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(users))
    
    Swal.fire('El usuario ha sido registrado');
    // Swal.fire({
    //   title: 'Producto eliminado!',
    //   icon: 'success',
    //   background: '#fff'
    // })

    // Limpiar formulario y redirigir al home
    registerForm.reset
    window.location.href = '/pages/login/login.html'
})

function validateUser(users, email, dni){
    
      return users.find(user => {
        if (user.email === email || user.dni === dni) return true;
      })

}