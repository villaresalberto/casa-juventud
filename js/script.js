// Obtener los elementos
const playVideoButton = document.getElementById('playVideoButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const imageButtonContainer = document.getElementById('imageButtonContainer');
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');
const content = document.querySelector('.content');
const closeVideoButton = document.getElementById('closeVideoButton');
const googleMapsButton = document.getElementById('googleMapsButton');
const audio = document.getElementById("background-audio");

// Al hacer clic en el botón para reproducir el video
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');  // Ocultar el título y el párrafo
    videoContainer.classList.remove('hidden');  // Mostrar el video en pantalla completa
    video.play();  // Reproducir el video
    audio.currentTime = 0;  // Reiniciar el audio
    audio.play();  // Reproducir el audio
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

// Al hacer clic en la "X" para cerrar el video
closeVideoButton.addEventListener('click', () => {
    video.pause();  // Pausa el video si está en reproducción
    videoContainer.classList.add('hidden');  // Ocultar el video
    content.classList.remove('hidden');  // Mostrar de nuevo el contenido inicial (título y párrafo)
    playVideoButton.classList.remove('hidden');  // Volver a mostrar el botón de abrir video
    audio.pause();  // Pausar el audio
    audio.currentTime = 0;  // Reiniciar el audio para la próxima vez
});

// Muestra la ubicación en Google Maps
googleMapsButton.addEventListener('click', () => {
    window.location.href = 'https://maps.app.goo.gl/YdrEDPcnh4mwwdwy8';
});

