// Get the elements
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const caption = document.getElementById("caption");

let currentImageIndex = 0;

// Open the lightbox
function openLightbox(index) {
    lightbox.style.display = "block";
    showImage(index);
}

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Show a specific image in the lightbox
function showImage(index) {
    currentImageIndex = index;
    lightboxImage.src = galleryItems[index].querySelector("img").src;
    caption.textContent = galleryItems[index].getAttribute("data-caption");
}

// Change to the previous or next image
function changeImage(step) {
    const newIndex = currentImageIndex + step;
    if (newIndex >= 0 && newIndex < galleryItems.length) {
        showImage(newIndex);
    }
}

// Add click event listeners to gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        openLightbox(index);
    });
});

// Add click event listeners to close and navigation buttons
document.querySelector(".close-btn").addEventListener("click", closeLightbox);
document.querySelector(".prev").addEventListener("click", () => changeImage(-1));
document.querySelector(".next").addEventListener("click", () => changeImage(1));
