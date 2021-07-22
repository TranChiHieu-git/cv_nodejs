function toggleMenu() {
    let navbar_menu = document.getElementById("navbar-menu");
    let navbar_header_icon = document.getElementById("navbar-header__icon");
    if (navbar_menu && navbar_header_icon) {
        if (navbar_menu.classList.contains("navbar-menu__hidden")) {
            navbar_menu.classList.remove("navbar-menu__hidden");

            let tempInterVal = setInterval(() => {
                navbar_header_icon.classList.remove("fa-bars");
                navbar_header_icon.classList.add("fa-times");
                navbar_header_icon.classList.add("icon-pink");
                clearInterval(tempInterVal);

            }, 400);
        } else {
            navbar_menu.classList.add("navbar-menu__hidden");
            let tempInterVal = setInterval(() => {
                navbar_header_icon.classList.remove("fa-times");
                navbar_header_icon.classList.add("fa-bars");
                navbar_header_icon.classList.remove("icon-pink");
                clearInterval(tempInterVal);

            }, 400);
        }
    }
}
function closeModal() {
    let modal_portfolio = document.getElementById("id-modal-portfolio");
    modal_portfolio.style.display = "none";
}