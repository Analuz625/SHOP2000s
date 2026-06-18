let carrito = 0;

const productos = [

{
    idProducto: "MP300001",
    marca: "Apple",
    modelo: "iPod Nano",
    categoria: "Flash",
    capacidadGB: 8,
    radioFM: false,
    reproduceVideo: true,
    estado: "Usado",
    precio: 120000,
    stock: 3,
    imagen: "img/ipodnano.jpg"
},

{
    idProducto: "MP300002",
    marca: "Sony",
    modelo: "NW-E436F",
    categoria: "Flash",
    capacidadGB: 4,
    radioFM: true,
    reproduceVideo: true,
    estado: "Restaurado",
    precio: 95000,
    stock: 2,
    imagen: "img/sony.jpg"
},

{
    idProducto: "MP300003",
    marca: "Creative",
    modelo: "Zen Micro",
    categoria: "Flash",
    capacidadGB: 5,
    radioFM: true,
    reproduceVideo: false,
    estado: "Usado",
    precio: 85000,
    stock: 4,
    imagen: "img/zenmicro.jpg"
},

{
    idProducto: "MP300004",
    marca: "Microsoft",
    modelo: "Zune",
    categoria: "Video",
    capacidadGB: 30,
    radioFM: true,
    reproduceVideo: true,
    estado: "Restaurado",
    precio: 180000,
    stock: 1,
    imagen: "img/zune.jpg"
},

{
    idProducto: "MP300005",
    marca: "SanDisk",
    modelo: "Sansa e200",
    categoria: "Flash",
    capacidadGB: 8,
    radioFM: true,
    reproduceVideo: true,
    estado: "Usado",
    precio: 70000,
    stock: 5,
    imagen: "img/sansa.jpg"
},

{
    idProducto: "MP300006",
    marca: "iRiver",
    modelo: "H320",
    categoria: "HDD",
    capacidadGB: 20,
    radioFM: true,
    reproduceVideo: false,
    estado: "Coleccionable",
    precio: 160000,
    stock: 1,
    imagen: "img/iriver.jpg"
},

{
    idProducto: "MP300007",
    marca: "Archos",
    modelo: "Jukebox Recorder 20",
    categoria: "Jukebox",
    capacidadGB: 20,
    radioFM: false,
    reproduceVideo: false,
    estado: "Coleccionable",
    precio: 220000,
    stock: 1,
    imagen: "img/archos.jpg"
}

];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="tarjeta">

                <img src="${producto.imagen}" width="200">

                <h3>${producto.modelo}</h3>

                <p>ID: ${producto.idProducto}</p>
                <p>Marca: ${producto.marca}</p>
                <p>Capacidad: ${producto.capacidadGB} GB</p>
<p>Estado: ${producto.estado}</p>
<p>Radio FM: ${producto.radioFM ? "Sí" : "No"}</p>
<p>Stock: ${producto.stock}</p>
<p>Precio: $${producto.precio.toLocaleString()}</p>


                <button onclick="agregarCarrito()">
                    Agregar al carrito
                </button>

            </div>
        `;
    });
}

mostrarProductos(productos);

document
.getElementById("busqueda")
.addEventListener("input", function() {

    let texto = this.value.toLowerCase();

    let resultado = productos.filter(producto =>
        producto.modelo.toLowerCase().includes(texto)
    );

    mostrarProductos(resultado);

});

function agregarCarrito() {

    carrito++;

    document.getElementById("contadorCarrito").innerText =
        "Carrito: " + carrito + " productos";
}