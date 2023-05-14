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
                <!-- Left Column / Headphones Image -->
                <div class="left-column">
                    <img data-image="black" src="../../assets/img/products/espumadora-predrini-p9.jpg" alt="">
                    <img data-image="blue" src="../../assets/img/products/cup-chocolatto-p7.jpg" alt="">
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

    let oki = false;
    let newProduct = {
        id,
        name: product.name,
        price: product.price,
        quantity: Number(document.getElementById('amount').value),
        image: product.image
    };
    console.log('hola')
    for (let item in carrito) {
        if (carrito[item].id == id){
            oki = true;
            carrito[item].quantity += newProduct.quantity
        } 
    }
    if (!oki) carrito.push(newProduct);
    localStorage.setItem('carrito', JSON.stringify(carrito));

}



