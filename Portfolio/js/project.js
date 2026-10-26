// ====================================
// Dynamic Project cards JS starts here
// ====================================
displayProjects(projects) ;

function displayProjects(projectList) {
    projectGrid.innerHTML = "" ;

    if(projectList.length === 0) {
        const message = document.createElement("p") ;
        message.classList.add("no-projects") ;
        message.textContent = "No projects found. Try a different search or category." ;
        projectGrid.appendChild(message) ;
    }

    projectList.forEach((project) => {
        const card = document.createElement("article") ;
    
        card.classList.add("project-card") ;

        const technologyTags = project.technologies.map((technology) => `<span class="project-tag">${technology}</span>`).join("") ;

        let githubLink = "" ;
        let demoLink = "" ;

        if(project.github) {
            githubLink = `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="projrct-link">GitHub</a>` ;
        }

        if(project.demo) {
            demoLink = `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="projrct-link">Live Demo</a>` ;
        }
    
        card.innerHTML = `<img src="${project.image}" alt="${project.title}" class="project-image">
                          <h3>${project.title}</h3>
                          <div class="project-tags">${technologyTags}</div>
                          <p>${project.description}</p>
                          <div class="project-actions">
                            ${githubLink}
                            ${demoLink}
                          </div>
                          <a href="#" class="project-link">View Port</a>` ;
        
        projectGrid.appendChild(card) ;
    }) ;
}
// ==================================
// Dynamic Project cards JS ends here
// ==================================


// =============================
// Project Search JS starts here
// =============================
projectSearch.addEventListener("input", () => {
    searchTerm = projectSearch.value.trim().toLowerCase() ;

    filterProjects() ;
}) ;
// ===========================
// Project Search JS ends here
// ===========================


// ==============================
// Project Filters JS starts here
// ==============================
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category ;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active") ;
        }) ;

        button.classList.add("active") ;

        filterProjects() ;
    }) ;
}) ;
// ============================
// Project Filters JS ends here
// ============================


// ======================================
// Project Filter Function JS starts here
// ======================================
function filterProjects() {
    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory ;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) || project.description.toLowerCase().includes(searchTerm) ;

        return matchesCategory && matchesSearch ;
    }) ;

    displayProjects(filteredProjects) ;
}
// ====================================
// Project Filter function JS ends here
// ====================================