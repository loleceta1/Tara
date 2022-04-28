/**ÁRRAY DE PRODUCTOS*****/ 

const productos = [
    { id: 1, titulo: "Masajes Relajación", precio: 999, imagen: '../imagenesTARA/massage-therapy-1612308_1920.jpg' },
    { id: 2, titulo: "Reiki", precio: 800, imagen: '../imagenesTARA/hands-1327811_1920.jpg' },
    { id: 3, titulo: "Tratamiento Facial", precio: 1500, imagen: '../imagenesTARA/woman-3141766_1920.jpg'},
    { id: 4, titulo: "Tratamiento Corporal", precio: ' ',imagen: '../imagenesTARA/woman-567021_1920.jpg'},
];
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
console.log(addToShoppingCartButtons)
/*const agregarAlCarrito = (idProducto) => {

     const valorCantidad = document.getElementById(
        `comprar- ${elementoDelArray.id}`
     ).value

    const productoAgregado = productos.find(producto=> producto.id === idProducto);
    productoAgregado.cantidad = valorCantidad;

    carrito.push(productoAgregado);
    document.getElementById("cantidad-seleccionado").innerHTML = productoAgregado.precio * productoAgregado.cantidad;

    localStorage.setItem("carrito", JSON.stringify(carrito));

    /*Swal.fire({
        title: `Acabas de seleccionar: ${productoAgregado.titulo}`,
        text: "Felicitaciones!",
        imageUrl: `${productoAgregado.imagen}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }) 

};*/

   
generarCards(productos);

function generarCards(productos){
    let lasCards = ``;
    productos.forEach((element) => {
        lasCards += `<div class="col mb-5">
        <div = "producto" class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${element.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-3">
                <div class="text-center">
                    <!-- Product name-->
                    <h6 class="fw-bolder">${element.titulo}</h6>
                    <!-- Product price-->
                    <span class=""></span> 
                    $ ${element.precio}
                    ${element.precio> 0 ? '' : 'No Disponible' }
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button id = "addToCart"
                        onclick=""
                        class="btn btn-outline-dark mt-auto addToCart" href="Seleccion">
                        Seleccionar
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(lasCards);
}

function mostrarCardsEnElHTML(lasCards) {
    document.getElementById("listado-servicios").innerHTML = lasCards;
};
