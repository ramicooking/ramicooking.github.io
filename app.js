let slideIndex = 2;


function showCarouselSlides() {
    const slides = document.querySelectorAll(".carousel-image");
    const totalSlides = slides.length;

    // Entferne die Klasse "active" von allen Bildern
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Füge die "active"-Klasse für das aktuelle Bild hinzu
    slides[slideIndex].classList.add("active");

    // Verschiebe den Streifen horizontal
    const carouselInner = document.querySelector(".carousel-inner");
    const offset = -slideIndex * 0.5; // Verschiebung in % (Bild ist 20% breit)
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Nächster Index
    slideIndex = (slideIndex + 1) % totalSlides; // Zyklisch durch die Bilder
}

// Automatische Rotation alle 3 Sekunden
setInterval(showCarouselSlides, 2500);

