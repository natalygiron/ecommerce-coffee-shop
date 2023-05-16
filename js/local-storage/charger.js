let dataProducts = JSON.parse(localStorage.getItem('products'));

if (dataProducts == null) {
    let Products = [
        {
            name: 'Tomatodo Brownie	',
            description: 'Incluye 1 Tomatodo de vidrio color Café, 1 sorbetes de vidrio del mismo tono y material, forro de cuero y tapa de doble uso. Capacidad de 400ml. Material: Vidrio Pyrex. Soporta calor y frío. Apto para microondas',
            price: 34.90,
            stock: 15,
            image: '/assets/img/products/cup-brownie-p3.jpg'
        },
        {
            name: 'Tomatodo Toffee Bambú',
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
            name: 'Taza Latte',
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

    localStorage.setItem('products', JSON.stringify(Products));
}

let dataUsers = JSON.parse(localStorage.getItem('users'));

if (dataUsers == null) {
    let adminUser = [
        {
            fullname: 'manager',
            dni: '12345678',
            email: 'manager@manager.es',
            phone: '123456789',
            password: 'manager123',
            confirm_password: 'manager123',
            gender: 'on',
            rol: 'ADMIN'
        }
    ]
    
    localStorage.setItem('users', JSON.stringify(adminUser));
}