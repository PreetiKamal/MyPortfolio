// ================================
// JavaScript Variables starts here
// ================================
const contactForm = document.getElementById("contact-form") ;

const nameInput = document.getElementById("name") ;
const emailInput = document.getElementById("email") ;
const messageInput = document.getElementById("message") ;

const nameError = document.getElementById("name-error") ;
const emailError = document.getElementById("email-error") ;
const messageError = document.getElementById("message-error") ;

const formSuccess = document.getElementById("form-success") ;

const scrollButton = document.querySelector(".scroll-button") ;
const scrollIcon = document.getElementById("scroll-icon") ;

const themeToggle = document.querySelector("#theme-toggle") ;
const themeIcon = document.getElementById("theme-icon") ;
const body = document.body ;

const savedTheme = localStorage.getItem("theme") ;

const navLinks = document.querySelectorAll(".nav-links a") ;
const sections = document.querySelectorAll("section[id]") ;
const mode = document.getElementById("mode") ;

const menuToggle = document.getElementById("menu-toggle") ;
const menuIcon = document.getElementById("menu-icon") ;
const navLinksContainer = document.querySelector(".nav-links") ;

const projects = [
    {
        title: "Student Portfolio",
        description: "A personal portfolio website built using HTML, CSS and JavaScript.",
        image: "images/portfolio.jpg",
        category: "web",
        technologies: ["HtML", "CSS", "JavaScript"],
        github: "https://github.com/PreetiKamal",
        demo: ""
    },
    {
        title: "Student Portfolio",
        description: "A personal portfolio website built using HTML, CSS and JavaScript.",
        image: "images/portfolio.jpg",
        category: "web",
        technologies: ["HtML", "CSS", "JavaScript"],
        github: "https://github.com/PreetiKamal",
        demo: ""
    },
    {
        title: "Future Project",
        description: "A new project that I will build as I continue learning full-stack web development.",
        image: "images/portfolio.jpg",
        category: "other",
        technologies: [],
        github: "https://github.com/PreetiKamal",
        demo: ""
    }
] ;
const projectGrid = document.getElementById("project-grid") ;
const projectSearch = document.getElementById("project-search") ;
const filterButtons = document.querySelectorAll(".filter-btn") ;

let selectedCategory = "all" ;
let searchTerm = "" ;
// ================================
// JavaScript Variables starts here
// ================================