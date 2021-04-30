const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');
const direccion = document.getElementById('dir');
const documento = document.getElementById('documento');
const entrega = document.getElementById('entrega');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra() {
    // e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (cliente.value === '' || correo.value === '' || direccion.value === '' || documento.value === '' || entrega.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: true,
        })
    }
    else {
        //////////////////////////////
        Swal.fire({
            type: 'info',
            title: 'Disculpanos',
            text: 'Lo sentimos las caracteristicas de enlace a PayU o PSE aun no estan implementadas.',
            showConfirmButton: true,
            imageUrl: 'img/mono.png',
            imageWidth: 313,
            imageHeight: 311,
            imageAlt: 'sorry',
        })

    }
    return false;
}

