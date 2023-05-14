let Products = [
    {
        name: 'Tomatodo Brownie	',
        description: 'Incluye 1 Tomatodo de vidrio color Café, 1 sorbetes de vidrio del mismo tono y material, forro de cuero y tapa de doble uso. Capacidad de 400ml. Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 34.90,
        stock: 15,
        image: '/assets/img/products/cup-brownie-p3.jpg'
    },
    {
        name: '	Tomatodo Toffee Bambú',
        description: 'Material: Vidrio Borosilicato. Resistente a Calor. Capacidad: 500 ml. Incluye cañita de vidrio resistente a calor y tapa de bambù.',
        price: 19.90,
        stock: 12,
        image: '/assets/img/products/cup-toffe-bambu-p2.jpg'
    },
    {
        name: 'Dúo Macadamia',
        description: 'Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 39.90,
        stock: 20,
        image: '/assets/img/products/cup-macadamia-p4.jpg'
    },

    {
        name: 'Taza Chocolatto',
        description: 'Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 17.90,
        stock: 10,
        image: '/assets/img/products/cup-chocolatto-p7.jpg'
    },
    {
        name: 'Taza Fessa',
        description: 'Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 21.90,
        stock: 10,
        image: '/assets/img/products/cup-fessa-p5.jpg'
    },
    {
        name: '	Taza Latte',
        description: 'Capacidad de 300 ml aprox. Material: Vidrio templado.Apto para microondas y agua hirviendo. Medidas: 10 cm de alto.',
        price: 19.90,
        stock: 17,
        image: '/assets/img/products/cup-latte-p6.jpg'
    },
    {
        name: 'Taza Specialty',
        description: 'Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 29.90,
        stock: 12,
        image: '/assets/img/products/cup-specialty-p1.jpg',
    },
    {
        name: 'Vaso Americano',
        description: 'Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
        price: 29.90,
        stock: 15,
        image: '/assets/img/products/glass-americano-p8.jpg',
    },
    {
        name: 'Espumadora PEDRINI',
        description: ' Con solo 1 botón, espuma tu leche favorita y disfruta de tus café super cremosos, capuchinnos y decora tus bebidas al mismo tiempo. Material Acero inoxidable',
        price: 89.90,
        stock: 20,
        image: '/assets/img/products/espumadora-predrini-p9.jpg',
    }
];

let productList = JSON.parse(localStorage.getItem('products')) || localStorage.setItem('products', JSON.stringify(Products));

let index=0;
let edit=false;
// console.log(productList);

//1- Obtener el body de la tabla para poder modificarlo desde JS
const tablebody = document.querySelector("#table-body");
console.log(tablebody)
//2- Definir una función para iterar el array
function renderizarTabla() {

    tablebody.innerHTML = '';
    document.getElementById('exampleModalLabel').innerText = 'Agregar nuevo producto';
    document.getElementById('save-btn').innerText = 'Registrar producto';
 
    productList = JSON.parse(localStorage.getItem('products'))
    // console.log(productList)
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

}
renderizarTabla();

function addProduct(evt) {
    evt.preventDefault();
    console.dir(evt.target);

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
    newProductFormData.price = +newProductFormData.price

    console.log(newProductFormData);

    if(edit==true){
        Products[index] = newProduct;
        Swal.fire({
            title: `El producto fue modificado exitosamente.`,
            icon: 'success'
        })
        edit=false;
        
    } else {
        Products.push(newProduct);
        index=Products.length+1;
        Swal.fire({
            title: `El producto fue agregado exitosamente.`,
            icon: 'success'
        })
    
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