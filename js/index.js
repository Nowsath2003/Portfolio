
//AT LOADING
document.addEventListener("DOMContentLoaded", function () {


    //ABOUTME TRANSITION
    const aboutMeSection = document.querySelector('.aboutme');
    const aboutMeSectionPosition = aboutMeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutMeSectionPosition < screenPosition) {
        aboutMeSection.classList.add('display');
    }

    //NAV-LINK ACTIVE
    const navContainer = document.querySelector('.nav-row');
    navContainer.classList.add('display');



    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 300 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");


    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});




//roles
document.addEventListener('DOMContentLoaded', () => {
    const role = document.querySelectorAll('.role');
    let index = 0;

    function nextroles() {
        role[index].classList.remove('active');
        index = (index + 1) % role.length;
        role[index].classList.add('active');
    }
    setInterval(nextroles, 3000);
});


document.addEventListener('DOMContentLoaded', function () {
    //menu-button
    document.getElementById('menu-button').addEventListener('click', function () {
        var menu = document.getElementById('nav-menu');
        var navrow = document.querySelector('.nav-row');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            navrow.classList.add('sticky');

        } else {
            menu.classList.add('hidden');
            if (window.scrollY > 150) {
                navrow.classList.add('sticky');
            } else {
                navrow.classList.remove('sticky');
            }

        }
        document.querySelector('.projects').addEventListener("scroll", function(){
            if(!menu.classList.contains('hidden')){
                menu.classList.add('hidden');
            }
        })
    });
   
   


    //AT SCROLL
    window.addEventListener('scroll', function () {

        //NAV-ROW
        const navContainer = document.querySelector('.nav-row');
        const aboutMeSection = document.querySelector('.aboutme');
        const aboutMeSectionPosition = aboutMeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (window.scrollY > 150) {
            navContainer.classList.add('sticky');
        } else {
            navContainer.classList.remove('sticky');
        }

        if (aboutMeSectionPosition < screenPosition) {
            aboutMeSection.classList.add('display');
        }

        //education section transition
        const educationSection = document.querySelector('.education');
        const educationSectionPosition = educationSection.getBoundingClientRect().top;
        if (educationSectionPosition < screenPosition) {
            educationSection.classList.add('display');
        }

        //Skill section transition
        const skillSection = document.querySelector('.skills');
        const skillSectionPosition = skillSection.getBoundingClientRect().top;
        if(skillSectionPosition < screenPosition){
            skillSection.classList.add('display');
        }

        //contact section transition
        const contactSection = document.querySelector('.contacts');
        const contactSectionPosition = contactSection.getBoundingClientRect().top;
        if(contactSectionPosition < screenPosition){
            contactSection.classList.add('display');
        }
        else{
            contactSection.classList.remove('display');
        }
    });

    window.addEventListener('scroll', function () {
        var menu = document.getElementById('nav-menu');
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    })
});


// project section
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var modal = document.getElementById("modal");
    var modalInfo = document.getElementById("modal-info");
    var span = document.getElementsByClassName("close")[0];

    slides.forEach(function(slide) {
        slide.addEventListener("click", function() {
            var info = this.getAttribute("data-info");
            modalInfo.innerHTML = getInfo(info);
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.addEventListener("scroll", function(){
        modal.style.display = "none";
    })

    function getInfo(info) {
        switch(info) {
            case "info1":
                return `
                <div class="modal-project-content">
                    <h3 class="modal-project-title">Personal Portfolio Website</h3>
                    <p class="modal-project-description">This project showcases a dynamic and interactive personal portfolio built using HTML, CSS, and JavaScript. The website features a sleek and classic design, highlighting various sections such as:</p>
                    <ul class="modal-project-list">
                        <li class="modal-project-list-item"><span style="color: rgb(90,90,240); font-weight: bold;">About Me:</span> A brief introduction about who I am, my background, and my professional aspirations.</li>
                        <li class="modal-project-list-item"><span style="color: rgb(90,90,240); font-weight: bold;">Education:</span> Details of my academic qualifications and institutions attended.</li>
                        <li class="modal-project-list-item"><span style="color: rgb(90,90,240); font-weight: bold;">Skills:</span> A visual representation of my technical skills and proficiencies.</li>
                        <li class="modal-project-list-item"><span style="color: rgb(90,90,240); font-weight: bold;">Projects:</span> Highlights of my key projects, complete with descriptions and visuals.</li>
                        <li class="modal-project-list-item"><span style="color: rgb(90,90,240); font-weight: bold;">Contact:</span> Information on how to get in touch with me, including a stylish contact form.</li>
                    </ul>
                    <a href="#" class="project-link">View Website</a>
                    <a href="https://github.com/Nowsath2003/Portfolio" target="_blank" class="github-link">GitHub Link</a>
                </div>
                `;
            case "info2":
                return `
                    <h3 class="modal-project-title">Will update soon...</h3>
                `;
            case "info3":
                return `
                    <h3 class="modal-project-title">Will update soon...</h3>
                `;
            case "info4":
                return `
                    <h3 class="modal-project-title">Will updatde soon...</h3>
                `;
            case "info5":
                return `
                    <h3 class="modal-project-title">Will update soon...</h3>
                `;
            case "info6":
                return `
                    <h3 class="modal-project-title">Will update soon...</h3>
                `;
            default:
                return `
                    <h3>No information available</h3>
                    <p>Sorry, no details are available for this project.</p>
                `;
        }
    }

    let slideIndex = 0;
    const slidesPerView = 2;

    function showSlides(n) {
        if (n >= slides.length / slidesPerView) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = Math.ceil(slides.length / slidesPerView) - 1;
        }
        let transformValue = -slideIndex * 100 / slidesPerView;
        document.querySelector(".slides").style.transform = `translateX(${transformValue}%)`;
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    document.querySelector(".next").addEventListener("click", () => plusSlides(1));
    document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));

    showSlides(slideIndex);
});
// contact


