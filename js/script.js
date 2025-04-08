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

// Procesar el pago con tarjeta (simulado)
document.getElementById('btn-tarjeta').addEventListener('click', (e) => {
    e.preventDefault();
    const numeroTarjeta = document.getElementById('numero-tarjeta').value;
    const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
    const cvv = document.getElementById('cvv').value;
    const nombreTarjeta = document.getElementById('nombre-tarjeta').value;
    
    if (!numeroTarjeta || !fechaVencimiento || !cvv || !nombreTarjeta) {
        alert('Por favor completa todos los campos de la tarjeta');
        return;
    }
    
    // Simulación de procesamiento de pago
    alert('¡Pago procesado con éxito! Recibirás un email con tu receta en breve.');
    modalCompra.style.display = 'none';
});
// Agregar esto a tu archivo script.js existente

// Abrir modal de detalles
const botonesVerDetalles = document.querySelectorAll('.ver-detalles');
const modalDetalles = document.getElementById('modal-detalles');
const cerrarModalDetalles = modalDetalles.querySelector('.cerrar-modal');
const recetaTitulo = document.getElementById('receta-titulo');

botonesVerDetalles.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = boton.getAttribute('data-producto');
        
        // Configurar el modal según el producto
        if (producto === 'postres') {
            recetaTitulo.textContent = 'Postres Peruanos Tradicionales';
            // Aquí podrías cambiar otros detalles si tienes diferentes tipos de recetas
        }
        
        modalDetalles.style.display = 'flex';
    });
});

cerrarModalDetalles.addEventListener('click', () => {
    modalDetalles.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modalDetalles) {
        modalDetalles.style.display = 'none';
    }
});

// Funcionalidad para la sección de FAQ
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las preguntas de FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Añadir evento de clic a cada pregunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle la clase active en la pregunta
            this.classList.toggle('active');
            
            // Obtener la respuesta asociada a esta pregunta
            const answer = this.nextElementSibling;
            
            // Toggle la clase active en la respuesta
            answer.classList.toggle('active');
            
            // Cambiar el icono
            const icon = this.querySelector('.faq-icon i');
            
            // Si la respuesta está activa, cambia el icono a "chevron-up", sino a "chevron-down"
            if (answer.classList.contains('active')) {
                icon.className = 'fas fa-chevron-up';
            } else {
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
});
