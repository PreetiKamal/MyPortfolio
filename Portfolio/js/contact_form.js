// ===========================
// Contact Form JS starts Here
// ===========================
contactForm.addEventListener("submit", (event) => {
    event.preventDefault() ;

    formSuccess.textContent = "" ;

    const name = nameInput.value.trim() ;
    const email = emailInput.value.trim() ;
    const message = messageInput.value.trim() ;

    if(name === "") {
        nameError.textContent = "Name is required" ;
        return ;
    } else {
        nameError.textContent = "" ;
    }

    if(email === "") {
        emailError.textContent = "Email is required" ;
        return ;
    }
    if(!email.includes("@")) {
        emailError.textContent = "Enter a valid email" ;
        return ;
    } else {
        emailError.textContent = "" ;
    }

    if(message === "") {
        messageError.textContent = "Message is required" ;
        return ;
    } else {
        messageError.textContent = "" ;
    }

    formSuccess.textContent = "Message sent successfully!" ;
    nameInput.value = "" ;
    emailInput.value = "" ;
    messageInput.value = "" ;
}) ;

nameInput.addEventListener("blur", () => {
    const name = nameInput.value.trim() ;
    nameInput.classList.remove("form-input-error", "form-input-valid") ;

    if(name === "") {
        nameError.textContent = "Please enter your name." ;
        nameInput.classList.add("form-input-error") ;
    } else {
        nameError.textContent = "" ;
        nameInput.classList.add("form-input-valid") ;
    }
}) ;

emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim() ;
    emailInput.classList.remove("form-input-error", "form-input-valid") ;

    if(email === "") {
        emailError.textContent = "Please enter your email." ;
        emailInput.classList.add("form-input-error") ;
    } else if(!email.includes("@")) {
        emailError.textContent = "Please enter a valid email." ;
        emailInput.classList.add("form-input-error") ;
    } else {
        emailError.textContent = "" ;
        emailInput.classList.add("form-input-valid") ;
    }
}) ;

messageInput.addEventListener("blur", () => {
    const message = messageInput.value.trim() ;
    messageInput.classList.remove("form-input-error", "form-input-valid") ;

    if(message === "") {
        messageError.textContent = "Please enter a message." ;
        messageInput.classList.add("form-input-error") ;
    } else {
        messageError.textContent = "" ;
        messageInput.classList.add("form-input-valid") ;
    }
}) ;
// =========================
// Contact Form JS ends here
// =========================s