// ==========================
// Menu Toggle JS starts here
// ==========================
menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active") ;

    if(navLinksContainer.classList.contains("active")) {
        menuIcon.src = "images/close.png" ;
    } else {
        menuIcon.src = "images/menu.svg" ;
    }
}) ;

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("active") ;

        menuIcon.src = "images/menu.svg" ;
    }) ;
}) ;
// ========================
// Menu Toggle JS ends here
// ========================