let myUser = JSON.parse(localStorage.getItem('myUser'));

if (myUser.rol == 'USER' || myUser == null) {
    window.location.href = '/';   
}

let userList = JSON.parse(localStorage.getItem('users'));

let index = undefined;

const tablebody = document.querySelector("#table-body");

function renderizarTabla() {
    tablebody.innerHTML = '';

    index = 0;

    userList.forEach((user) => {

        const tableRow = `<tr class="product">
                            <td class="t-table-cart">${user.fullname}</td>
                            <td class="t-table-cart">${user.dni}</td>
                            <td class="t-table-cart">${user.email}</td>
                            <td class="t-table-cart">${user.phone}</td>
                            <td class="t-table-cart">${user.rol}</td>
                            <td class="t-table-cart-x">
                                <i class='fa fa-edit' data-bs-toggle="modal" data-bs-target="#exampleModal" style='color: blue' onclick="editUser(${index})" data-bs-whatever="producto"></i>
                                <i class='fa fa-trash' style='color: red' onclick="deleteUser(${index})"></i>
                            </td>
                        </tr>`

        tablebody.innerHTML += tableRow;

        index+=1;
    });

    document.querySelector('.count-users').innerHTML = `Hay un total de ${index} usuarios`
}

function editUser(ix) {  
    let user = userList[ix];
    
    document.getElementById('user-name').value = user.fullname;
    document.getElementById('user-dni').value = user.dni;
    document.getElementById('user-mail').value = user.email;
    document.getElementById('user-phone').value = user.phone;
    document.getElementById('user-rol').value = user.rol;

    index = ix;
}

function modifyUser(evt) {
    evt.preventDefault();

    const userForm = evt.target.elements;
    
    const userMod = {
        fullname: userForm.name.value,
        dni: userForm.dni.value,
        email: userForm.mail.value,
        phone: userForm.phone.value,
        password: userList[index].password,
        confirm_password: userList[index].confirm_password,
        gender: userList[index].gender,
        rol: userForm.rol.value
    };

    userList[index] = userMod;

    localStorage.setItem('users', JSON.stringify(userList));

    Swal.fire({
        title: `Usuario modificado exitosamente.`,
        icon: 'success'
    })
}

function deleteUser(ix) {
    Swal.fire({
        title: '¿Eliminar usuario?',
        icon: 'warning',
        showCancelButton: true,
        background: '#fff',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Eliminar Usuario
            userList = userList.filter((item) => item !== userList[ix]);
            // Guardar cambios
            localStorage.setItem('users', JSON.stringify(userList));
        
            renderizarTabla();

          Swal.fire({
            title: 'Usuario eliminado!',
            icon: 'success',
            background: '#fff'
          })
        }
      })
}

function reset() {
    document.getElementById('user-name').value = '';
    document.getElementById('user-dni').value = '';
    document.getElementById('user-mail').value = '';
    document.getElementById('user-phone').value = '';
    document.getElementById('user-rol').value = '';
}

renderizarTabla();