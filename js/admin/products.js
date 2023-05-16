let myUser = JSON.parse(localStorage.getItem('myUser'));

if (myUser.rol == 'USER' || myUser == null) {
    window.location.href = '/';
}

let Products = JSON.parse(localStorage.getItem('products'));

let index=0;
let edit=false;

//1- Obtener el body de la tabla para poder modificarlo desde JS
const tablebody = document.querySelector("#table-body");

//2- Definir una función para iterar el array
function renderizarTabla() {
    tablebody.innerHTML = '';
    document.getElementById('exampleModalLabel').innerText = 'Agregar nuevo producto';
    document.getElementById('save-btn').innerText = 'Registrar producto';
 
    productList = JSON.parse(localStorage.getItem('products'))
    
    index=0;
    //3- Iterar el array para acceder a cada producto
    productList.forEach((producto) => {

        let imageSrc = producto.image ? producto.image : '/assets/img/products/no-product.png';

        //4- Introducir dentro del tbody una fila por producto con sus respectivas celdas
        const tableRow = `<tr class="product">
                            <td class="t-table-cart-img"><img src="${imageSrc}" alt="${producto.name}" class="img-cart"/></td>
                            <td class="t-table-cart product__name">${producto.name}</td>
                            <td class="t-table-cart product__desc">${producto.description}</td>
                            <td class="t-table-cart product__price">S/${producto.price}</td>
                            <td class="t-table-cart product__stock">${producto.stock}</td>
                            <td class="t-table-cart-x product__actions">
                                <i class='fa fa-edit' data-bs-toggle="modal" data-bs-target="#exampleModal" style='color: blue' onclick="editProduct(${index})" data-bs-whatever="producto"></i>
                                <i class='fa fa-trash' style='color: red' onclick="deleteProduct(${index})"></i>
                            </td>
                        </tr>`
        tablebody.innerHTML += tableRow;
        index+=1;
    });

    document.querySelector('.count-products').innerHTML = `Hay un total de ${index} productos`
}

function addProduct(evt) {
    evt.preventDefault();

    const product = evt.target.elements;

    const newProduct = {
        name: product.name.value,
        description: product.description.value,
        price: product.price.value,
        stock: product.stock.valueAsNumber,
        image: product.image.value
    };

    const newFormData = new FormData(evt.target);
    const newProductFormData = Object.fromEntries(newFormData);
    // newProductFormData.stock = newProductFormData.stock === "on" ? true : false;
    newProductFormData.price =+ newProductFormData.price

    if(edit == true){
        Products[index] = newProduct;

        Swal.fire({
            title: `El producto fue modificado exitosamente.`,
            icon: 'success'
        });

        edit = false;
    } else {
        Products.push(newProduct);

        index = Products.length + 1;

        Swal.fire({
            title: `El producto fue agregado exitosamente.`,
            icon: 'success'
        });
    
    }
    
    // Guardar cambios
    localStorage.setItem('products', JSON.stringify(Products))

    console.log(Products)

    renderizarTabla();

    evt.target.reset();

    product.name.focus();
}

const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

    //   modalTitle.textContent = `Agregar nuevo ${recipient}`
    //   modalBodyInput.value = recipient
    })
  }


function editProduct(ix) {

    document.getElementById('exampleModalLabel').innerText = 'Editar producto';
    document.getElementById('save-btn').innerText = 'Guardar cambios';
    edit=true;
    
    let product = Products[ix];
    console.log(Products)
    console.log(product)
    console.log(ix)
    
    // const prod_element = productList.elements;
    
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-image').value = product.image;
    
    index = ix;

}

function deleteProduct(ix) {
    
    Swal.fire({
        title: '¿Eliminar producto?',
        icon: 'warning',
        showCancelButton: true,
        background: '#fff',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Eliminar producto
            Products = Products.filter((item) => item !== Products[ix]);
            // Guardar cambios
            localStorage.setItem('products', JSON.stringify(Products));
        
            renderizarTabla();

          Swal.fire({
            title: 'Producto eliminado!',
            icon: 'success',
            background: '#fff'
          })
        }
      })
}

function reset() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-stock').value = '';
    document.getElementById('product-image').value = '';
    edit=false;
}

renderizarTabla();