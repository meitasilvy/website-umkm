const promoButton = document.querySelector("#promoButton");

promoButton.addEventListener("click", () => {
    promoButton.textContent = "Promo: Beli 2 gratis 1!";

    console.log("Promo Risol Gurih berhasil ditampilkan.");
});

// Hamburger menu
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
