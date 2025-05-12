const BURGER_BTN = document.getElementById("menu-burger");
const MENU = document.getElementById("header-menu");
const MENU_LINK = document.querySelectorAll(".nav__item");

BURGER_BTN.addEventListener("click", () => {
    BURGER_BTN.classList.toggle("open");
    MENU.classList.toggle("open");
    document.body.classList.toggle("locked")
});

MENU_LINK.forEach((link) => {link.addEventListener("click", () => {
    BURGER_BTN.classList.remove("open");
    MENU.classList.remove("open");
    document.body.classList.remove("locked")
})
});
