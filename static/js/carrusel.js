const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    carouselTrack.style.transition = 'transform 0.5s ease-in-out';
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

// Iniciar la transición automática
let slideInterval = setInterval(nextSlide, 10000); // Cambio automático cada 10 segundos

// Pausar la transición automática al hacer hover sobre el carrusel
carouselTrack.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Reanudar la transición automática al quitar el hover sobre el carrusel
carouselTrack.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 10000); // Reanudar el cambio automático cada 10 segundos
});
const newsImage1 = document.getElementById('newsImage1');
const newsImage2 = document.getElementById('newsImage2');

// Array con las URL de las imágenes para la primera noticia
const images1 = ['static/img/Lamborghini Huracán LP 610-4.jpeg','static/img/Lamborghini-Huracan-LP-610-4-interior-630x445.jpg', 'static/img/Lamborghini Huracán LP610-4.jpeg' /* Agrega más URL si hay más imágenes */];

// Array con las URL de las imágenes para la segunda noticia
const images2 = ['static/img/image_s_2.webp', 'static/img/family_d.jpeg', 'static/img/urus_gate_s_03.webp' /* Agrega más URL si hay más imágenes */];

let currentImageIndex1 = 0;
let currentImageIndex2 = 0;

// Función para cambiar la imagen automáticamente cada 3 segundos para la primera noticia
function autoChangeImage1() {
    setInterval(() => {
        currentImageIndex1++;
        if (currentImageIndex1 >= images1.length) {
            currentImageIndex1 = 0;
        }
        newsImage1.src = images1[currentImageIndex1];
    }, 3000);
}

// Función para cambiar la imagen automáticamente cada 3 segundos para la segunda noticia
function autoChangeImage2() {
    setInterval(() => {
        currentImageIndex2++;
        if (currentImageIndex2 >= images2.length) {
            currentImageIndex2 = 0;
        }
        newsImage2.src = images2[currentImageIndex2];
    }, 3000);
}

autoChangeImage1(); // Llama a la función para iniciar el cambio automático de imágenes para la primera noticia
autoChangeImage2(); // Llama a la función para iniciar el cambio automático de imágenes para la segunda noticia
 // Obtener referencia al formulario de comentarios
 const mostrarFormularioBtn = document.getElementById('mostrarFormulario');
 const formComentario = document.getElementById('formComentario');
 let timeoutID; // Variable para almacenar el ID del temporizador
 
 // Función para ocultar el formulario
 function ocultarFormulario() {
     formComentario.style.display = 'none';
 }
 
 // Agregar un evento de escucha para el envío del formulario
formComentario.addEventListener('submit', function(event) {
     // Verificar si el usuario está registrado (aquí deberías tener tu lógica de autenticación)
    const usuarioRegistrado = false; // Cambia esto con tu lógica real de autenticación
 
     // Si el usuario no está registrado, redirigirlo al formulario de registro
    if (!usuarioRegistrado) {
         // Cancelar el envío del formulario
        event.preventDefault();
 
         // Redirigir al usuario al formulario de registro
        window.location.href = '#registro'; // Cambia esto con el ID de tu sección de registro
     }
 });
 
mostrarFormularioBtn.addEventListener('click', () => {
    formComentario.style.display = 'block'; // Muestra el formulario al hacer clic en el botón
     
     // Si existe un temporizador previo, borrarlo
    if (timeoutID) {
         clearTimeout(timeoutID);
     }
 
     // Establecer un temporizador para ocultar el formulario después de 5 segundos
    timeoutID = setTimeout(ocultarFormulario, 5000);
 });
 
 

