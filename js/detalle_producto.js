let url = window.location.search;
let url_params = new URLSearchParams(url);
let id = url_params.get('id');

let product = JSON.parse(localStorage.getItem('products'))[id];

let container = document.querySelector('.container');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [] ;

function getProduct() {

    container.innerHTML = '';

    let imageSrc = product.image ? product.image : '/assets/img/products/no-product.png';

    const item = `
                <!-- Left Column -->
                <div class="left-column">
                    <img data-image="red" class="active" src="${imageSrc}" alt="">
                </div>
            
                <!-- Right Column -->
                <div class="right-column">
            
                    <!-- Product Description -->
                    <div class="product-description">
                        <span>Tazas</span>
                        <h1>${product.name}</h1>
                        <p>${product.description}</p>
                    </div>
                    <!-- Product Configuration -->
                    <div class="product-configuration">
                        <!-- Product size -->
                        <div class="cable-config">
                        <span>Elige una opción</span>
                        <div class="cable-choose">
                            <button>480 ml</button>
                            <button>300 ml</button>
                            <!-- <button>Long-coiled</button> -->
                        </div>
                        </div>
                        <span>Existencias: ${product.stock} disponibles</span>
                        <!-- Product Color -->
                        <div class="product-amount">
                        <span>Cantidad</span>
                
                        <div class="amount-choose">
                            <div>
                            <input type="number" id="amount" name="amount" value="1" checked><label for="amount"><span></span></label>
                            </div>    
                        </div>

                    </div>
                    <!-- Product Pricing -->
                    <div class="product-price">
                        <span>s/${product.price}</span>
                        <button class="cart-btn" onclick="addCarrito()">Añadir al carrito</button>
                    </div>
                </div>
    `
                        // onclick='console.log("${index}")'
    container.innerHTML += item;

}

getProduct();

function addCarrito() {

    let user = JSON.parse(localStorage.getItem('myUser'));
    if (!user) {
        Swal.fire({
            title: 'No has iniciado sesión',
            text: 'Necesitas iniciar sesión para realizar esta acción',
            icon: 'info',
            showCancelButton: true,
            background: '#fff',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iniciar sesión'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace('/pages/login/login.html');
            }
          }) 
    }

    let oki = false;
    let newProduct = {
        id,
        name: product.name,
        price: product.price,
        quantity: Number(document.getElementById('amount').value),
        image: product.image,
        user: user.email
    };
    
    for (let item in carrito) {
        if (carrito[item].id == id){
            oki = true;
            carrito[item].quantity += newProduct.quantity
        } 
    }
    if (!oki) carrito.push(newProduct);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    Swal.fire({
        position: 'center',
        icon: 'success',
        background: '#fff',
        title: 'Tu producto ha sido agregado al carrito',
        showConfirmButton: false,
        timer: 50000
    })
}



