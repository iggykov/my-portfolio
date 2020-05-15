const menuBtn = document.querySelector(".hamburger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

const menuItem = document.querySelectorAll(".hamburger-item a");
menuItem.forEach(hamitem => {
    hamitem.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        menuOpen = false;
    });
});
