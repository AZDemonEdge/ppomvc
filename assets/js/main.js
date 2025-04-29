//MENU LATERAL

document.getElementById("openBtn").onclick = function () {
    document.getElementById("menu").classList.toggle("active");
};

//CAROUSEL
document.querySelector('.carousel-control-next').addEventListener('click', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transition = 'transform 0.5s ease';
    carouselInner.style.transform = 'translateX(-25%)'; // Mueve 1 imagen (25% del ancho total)
    setTimeout(() => {
        const firstItem = carouselInner.firstElementChild;
        carouselInner.appendChild(firstItem);
        carouselInner.style.transition = 'none'; // Desactiva la transición para el reposicionamiento
        carouselInner.style.transform = 'translateX(0)'; // Resetea la posición
    }, 500); // Espera el tiempo de la transición
});

document.querySelector('.carousel-control-prev').addEventListener('click', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const lastItem = carouselInner.lastElementChild;
    carouselInner.insertBefore(lastItem, carouselInner.firstElementChild);
    carouselInner.style.transition = 'none'; // Desactiva la transición para el reposicionamiento
    carouselInner.style.transform = 'translateX(-25%)'; // Mueve 1 imagen
    setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease'; // Reactiva la transición
        carouselInner.style.transform = 'translateX(0)'; // Resetea la posición
    }, 10); // Breve espera para activar la transición
});
