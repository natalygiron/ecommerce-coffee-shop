let productList = JSON.parse(localStorage.getItem('products'));

let card = document.querySelector('.cards');

function renderizarCatalogo() {

    card.innerHTML = '';

    productList = JSON.parse(localStorage.getItem('products'));

    let index=0;
    
    productList.forEach((producto) => {

        let imageSrc = producto.image ? producto.image : '/assets/img/products/no-product.png';

        const card_item = `
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="${imageSrc}"></div>
                        <div class="card_content">
                            <h2 class="card_title">${producto.name}</h2>
                            <p class="card_text">S/${producto.price}</p>
                            <button class="btn card_btn" onclick='location.href="../pages/product/product.html?id=${index}"'>Comprar</button>
                        </div>
                    </div>
                </li>`
                            // onclick='console.log("${index}")'
        card.innerHTML += card_item;
        index+=1;
    });

}

renderizarCatalogo();
