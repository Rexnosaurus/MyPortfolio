document.addEventListener("DOMContentLoaded", () => {
    const usernameElement = document.getElementById("usernames");
    
    const nicknames = ["Rex", "RexTCM", "Rexnosaurus", "Dino", "Jun-Jun"];
    let currentIndex = 0;

    if (usernameElement) {
        usernameElement.textContent = nicknames[currentIndex];

        setInterval(() => {
            usernameElement.classList.add("fade-out");

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % nicknames.length;
                usernameElement.textContent = nicknames[currentIndex];
                
                usernameElement.classList.remove("fade-out");
            }, 500);
            
        }, 900);
    }
});
