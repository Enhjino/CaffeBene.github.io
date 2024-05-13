document.addEventListener("DOMContentLoaded", () => {
    // Your JavaScript code here
    const menuButton = document.getElementById("menu");
    const menuItems = document.getElementById("menu-items");

    menuButton.addEventListener("click", () => {
        menuItems.classList.toggle("open");
    });
});