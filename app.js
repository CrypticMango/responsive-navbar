const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

function openMenu() {
    menu.style.display = "block";
    burger.style.display = "none";
    close.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
    close.style.display = "none";
    burger.style.display = "block";
}