let cart = JSON.parse(localStorage.getItem('carrito'));

let content = document.querySelector('.cart-content');
console.log(content)

function renderizarCarrito() {

    content.innerHTML = '';

    let index = 0;
    let total = 0;
    cart.forEach((item) => {

        let imageSrc = item.image ? item.image : '/assets/img/products/no-product.png';
        let item_total = ((item.quantity)*(item.price)).toFixed(2);
        
        let cart_item = `
                        <tr>
                            <td class="t-table-cart-img">
                            <img src="${imageSrc}" class="img-cart"/>
                            </td>
                            <td class="t-table-cart" class="name">${item.name}</td>
                            <td class="t-table-cart">${item.description}</td>
                            <td class="t-table-cart qnt-btn">
                                <i class="far fa-minus-square btn-minus"></i>
                                <p id="quantity" name="quantity" class="input-quantity-cart" >${item.quantity}</p>
                                <i class="far fa-plus-square btn-plus"></i>
                            </td>
                            <td class="t-table-cart">S/${item.price}</td>
                            <td class="t-table-cart">S/${item_total}</td>
                            <td class="t-table-cart-x">
                                <i class='fa fa-times-circle'></i>
                            </td>
                        </tr>`
                            // onclick='console.log("${index}")'
        content.innerHTML += cart_item;
        index+=1;
        total+=Number(item_total);
    });
    document.querySelector(".total").innerHTML = 'S/'+total
}

renderizarCarrito();

