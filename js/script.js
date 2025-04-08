// Añade este código a tu archivo JavaScript existente (script.js)

// Referencias a elementos del DOM
const botonesComprar = document.querySelectorAll('.comprar');
const modalCompra = document.getElementById('modal-compra');
const cerrarModalCompra = modalCompra.querySelector('.cerrar-modal');
const productoTitulo = document.getElementById('producto-titulo');
const productoPrecio = document.getElementById('producto-precio');
// Configurar el modal de compra según el producto seleccionado
function configurarModalCompra(producto) {
    if (producto === 'postres') {
        productoTitulo.textContent = 'Postres Peruanos Tradicionales';
        productoPrecio.textContent = 'Precio: S/29.99';
    }
    // Puedes añadir más productos con diferentes configuraciones aquí
}


