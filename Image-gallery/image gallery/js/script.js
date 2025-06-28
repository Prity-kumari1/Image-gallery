function getGalleryImages() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const images = [];

    galleryItems.forEach(item => {
        const img = item.querySelector('.gallery-image');
        const title = item.querySelector('.image-title');

        images.push({
            src: img.src,
            alt: img.alt,
            title: title.textContent
        });
    });

    return images;
}

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
});

let currentImageIndex = 0;
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageCaption = document.getElementById('imageCaption');

function openModal(index) {
    const galleryImages = getGalleryImages();
    currentImageIndex = index;
    updateModal();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(step) {
    const galleryImages = getGalleryImages();
    currentImageIndex += step;
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    updateModal();
}

function updateModal() {
    const galleryImages = getGalleryImages();
    const image = galleryImages[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageCaption.textContent = image.title;

    // fade effect
    modalImage.style.opacity = '0';
    setTimeout(() => {
        modalImage.style.opacity = '1';
    }, 100);
}

// Close with ESC key
document.addEventListener('keydown', function (e) {
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        }
    }
});

document.querySelector('.modal-close').addEventListener('click', closeModal);