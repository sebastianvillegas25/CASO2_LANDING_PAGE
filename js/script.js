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
// Abrir modal de compra cuando se hace clic en "Comprar Ahora"
botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = boton.getAttribute('data-producto');
        configurarModalCompra(producto);
        modalCompra.style.display = 'flex';
        
        // Si venimos del modal de detalles, lo cerramos
        const modalDetalles = document.getElementById('modal-detalles');
        if (modalDetalles && modalDetalles.style.display === 'flex') {
            modalDetalles.style.display = 'none';
        }
    });
});

// Cerrar modal de compra
cerrarModalCompra.addEventListener('click', () => {
    modalCompra.style.display = 'none';
});

