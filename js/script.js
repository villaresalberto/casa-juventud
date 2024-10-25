// Obtener los elementos
const playVideoButton = document.getElementById('playVideoButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const imageButtonContainer = document.getElementById('imageButtonContainer');
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');
const content = document.querySelector('.content');

const closeImageButton = document.getElementById('closeImageButton');
// Al hacer clic en el botón para reproducir el video
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');  // Ocultar el título y el párrafo
    videoContainer.classList.remove('hidden');  // Mostrar el video en pantalla completa
    video.play();  // Reproducir el video
});

// Detectar cuando el video termina
video.addEventListener('ended', () => {
    videoContainer.classList.add('hidden');  // Ocultar el video cuando termina
    imageButtonContainer.classList.remove('hidden');  // Mostrar el botón para ver la imagen
});

// Al hacer clic en el botón para mostrar la imagen
showImageButton.addEventListener('click', () => {
    imageContainer.classList.remove('hidden');  // Mostrar la imagen
    imageButtonContainer.classList.add('hidden');  // Ocultar el botón de mostrar imagen
});

// Al hacer clic en el botón para reproducir el video
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');  // Ocultar el título y el párrafo
    videoContainer.classList.remove('hidden');  // Mostrar el video en pantalla completa
    video.play();  // Reproducir el video
});


// Obtener el botón de cierre del video
const closeVideoButton = document.getElementById('closeVideoButton');

// Al hacer clic en la "X" para cerrar el video
closeVideoButton.addEventListener('click', () => {
    video.pause();  // Pausa el video si está en reproducción
    videoContainer.classList.add('hidden');  // Ocultar el video
    content.classList.remove('hidden');  // Mostrar de nuevo el contenido inicial (título y párrafo)
    playVideoButton.classList.remove('hidden');  // Volver a mostrar el botón de abrir video
});

// Obtener el botón de Google Maps
const googleMapsButton = document.getElementById('googleMapsButton');

// Al hacer clic en el botón para ir a Google Maps
googleMapsButton.addEventListener('click', () => {
    window.open("https://www.google.com/maps?q=37.691515,-3.814880", "_blank");  // Abre Google Maps en una nueva pestaña
});

