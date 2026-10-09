document.addEventListener("DOMContentLoaded", () => {
    const usernameElement = document.getElementById("usernames");

    const nicknames = ["Rex", "RexTCM", "Rexnosaurus", "Dino", "Jun-Jun"];
    let currentIndex = 0;

    if (usernameElement) {
        usernameElement.textContent = nicknames[currentIndex];

        setInterval(() => {
            usernameElement.classList.add("about__username--fade-out");

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % nicknames.length;
                usernameElement.textContent = nicknames[currentIndex];

                usernameElement.classList.remove("about__username--fade-out");
            }, 500);

        }, 1000);
    }
});

function openModal(src) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("imgModalCaption");
    modal.style.display = "flex";
    modalImg.src = src;
    captionText.textContent = modalImg.alt;
}

function prevImage() {
    const modalImg = document.getElementById("expandedImg");
    const currentImgEl = document.querySelector(`.list__item-image[src="${modalImg.src}"]`);
    const setId = currentImgEl.dataset.set;
    const images = document.querySelectorAll(`.list__item-image[data-set="${setId}"]`);

    let currentIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openModal(images[currentIndex].src);
}

function nextImage() {
    const modalImg = document.getElementById("expandedImg");
    const currentImgEl = document.querySelector(`.list__item-image[src="${modalImg.src}"]`);
    const setId = currentImgEl.dataset.set;
    const images = document.querySelectorAll(`.list__item-image[data-set="${setId}"]`);

    let currentIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
    currentIndex = (currentIndex + 1) % images.length;
    openModal(images[currentIndex].src);
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const muteBtn = document.getElementById('muteBtn');
  const myMedia = document.getElementById('bgMusic');
  const muteIcon = document.getElementById('muteIcon');

  muteBtn.addEventListener('click', () => {
    myMedia.muted = !myMedia.muted;
    if (!myMedia.muted && myMedia.paused) {
      myMedia.play().catch(err => console.warn('Play blocked:', err));
    }
    muteIcon.setAttribute('name', myMedia.muted ? 'volume-mute-outline' : 'volume-high-outline');
  });
});