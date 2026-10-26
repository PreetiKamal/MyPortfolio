// ============================
// Scroll Button JS starts here
// ============================
window.addEventListener("scroll", () => {
    if(window.scrollY < 300) {
        scrollIcon.src = "images/arrow_down_float.png" ;
        scrollButton.setAttribute("aria-label", "Scroll to bottom") ;
    } else {
        scrollIcon.src = "images/arrow_up_float.png" ;
        scrollButton.setAttribute("aria-label", "Scroll to top") ;
    }
}) ;

scrollButton.addEventListener("click", () => {
    if(window.scrollY < 300) {
        window.scrollTo({
            top: document.body.scrollHeight, behavior: "smooth"
        }) ;
    } else {
        window.scrollTo({
            top: 0, behavior: "smooth"
        }) ;
    }
}) ;
// ==========================
// Scroll Button JS ends here
// ==========================