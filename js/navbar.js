// =====================================
// NavBar elements active JS starts here
// =====================================
window.addEventListener("scroll", () => {
    let currentSection = "" ;

    sections.forEach((section) => {
        if(window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id ;
        }
    }) ;

    navLinks.forEach((link) => {
        link.classList.remove("active") ;

        if(link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active") ;
        }
    }) ;
}) ;
// ===================================
// NavBar elements active JS ends here