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
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');
const myMedia = document.getElementById('bgMusic');

muteBtn.addEventListener('click', () => {
  myMedia.muted = !myMedia.muted;
  
  if (myMedia.muted) {
    muteIcon.setAttribute('name', 'volume-mute-outline');
  } else {
    muteIcon.setAttribute('name', 'volume-high-outline');
  }
});