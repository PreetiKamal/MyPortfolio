// ========================
// Dark mode JS starts here
// ========================
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode") ;

    if(body.classList.contains("dark-mode")) {
        themeIcon.src = "images/sun.png" ;
        mode.textContent = "Light Mode" ;
        themeToggle.setAttribute("aria-label", "Enable light mode") ;

        localStorage.setItem("theme", "dark") ;
    } else {
        themeIcon.src = "images/moon.png" ;
        mode.textContent = "Dark Mode" ;
        themeToggle.setAttribute("aria-label", "Enable dark mode") ;

        localStorage.setItem("theme", "light") ;
    }
}) ;

if(savedTheme === "dark") {
    body.classList.add("dark-mode") ;
    themeIcon.src = "images/sun.png" ;
    mode.textContent = "Light Mode" ;

    themeToggle.setAttribute("aria-label", "Enable light mode") ;
}
// ======================
// Dark mode JS ends here
// ======================