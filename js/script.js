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
// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modalCompra) {
        modalCompra.style.display = 'none';
    }
});

// Cambiar entre formularios de pago
const radioWhatsapp = document.getElementById('whatsapp');
const radioTarjeta = document.getElementById('tarjeta');
const formWhatsapp = document.getElementById('form-whatsapp');
const formTarjeta = document.getElementById('form-tarjeta');

radioWhatsapp.addEventListener('change', () => {
    if (radioWhatsapp.checked) {
        formWhatsapp.classList.add('active');
        formTarjeta.classList.remove('active');
    }
});

radioTarjeta.addEventListener('change', () => {
    if (radioTarjeta.checked) {
        formTarjeta.classList.add('active');
        formWhatsapp.classList.remove('active');
    }
});
// Procesar el pago por WhatsApp
document.getElementById('btn-whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre-whatsapp').value;
    const telefono = document.getElementById('telefono-whatsapp').value;
    
    if (!nombre || !telefono) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    // Formatear mensaje para WhatsApp
    const mensaje = `Hola, soy ${nombre}. Estoy interesado en comprar ${productoTitulo.textContent} por ${productoPrecio.textContent}. Por favor, contáctame para completar mi compra.`;
    const mensajeCodeado = encodeURIComponent(mensaje);
    
    const whatsappURL = `https://wa.me/+51907023588?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Cerrar modal después de abrir WhatsApp
    modalCompra.style.display = 'none';
});
