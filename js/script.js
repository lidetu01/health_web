document.addEventListener("DOMContentLoaded", function () {

    // mobile humburger 
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    const isOpen = nav.classList.contains("active");
    menuToggle.setAttribute( "aria-expanded",isOpen);
    });

    // Close menu after clicking a navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded","false");
    });
    });

     //about read more/read less 
    const aboutMore = document.querySelector(".about-more");
    const aboutButton = document.querySelector(".about-content .read-more");

    aboutButton.addEventListener("click", function () {
        if (aboutMore.style.display === "none") {
        aboutMore.style.display = "block";
        aboutButton.textContent = "Read Less";
    } else {
        aboutMore.style.display = "none";
        aboutButton.textContent = "Read More";
    }
    });

    // Service Read More / Read Less
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {
      const moreContent =
        card.querySelector(".service-more");
      const button =
        card.querySelector(".read-more");
      button.addEventListener("click", function () {
        moreContent.classList.toggle("show");
        if (moreContent.classList.contains("show")) {
            button.textContent = "Read Less";
        } else {
            button.textContent = "Read More";
        }
      });
    });

    //...hide service cards after the first 3 
    const ServiceToggleBtn = document.getElementById("services-toggle"); 
    const visibleServiceCards = 2; // Change to 2 if you want only two cards visible initially 
    let expandedService = false; 

    // Show only the first visibleCards initially 
    serviceCards.forEach((card, index) => { 
        if (index < visibleServiceCards) { 
            card.classList.add("show"); 
        } 
    }); 

    ServiceToggleBtn.addEventListener("click", () => { 
        expandedService = !expandedService; 
        if (expandedService) { 
            serviceCards.forEach(card => card.classList.add("show")); 
            ServiceToggleBtn.textContent = "See Less services"; 
        } else { 
            serviceCards.forEach((card, index) => { 
                if (index < visibleServiceCards) { 
                    card.classList.add("show"); 
                } else { 
                    card.classList.remove("show"); 
                } 
            }); 
            ServiceToggleBtn.textContent = "See More services"; 
            // Scroll back to the services section 
            document.getElementById("services").scrollIntoView({ behavior: "smooth" }); 
        } 
    });
    

       // doctors Read More / Read Less

      const doctorCards = document.querySelectorAll(".doctor-card");
      const toggleBtn = document.getElementById("doctors-toggle");

       const visibleCards = 2; 
       let expanded = false;

       // Show only the first visibleCards initially
      doctorCards.forEach((card, index) => {
        if (index < visibleCards) {
            card.classList.add("show");
        }
      });

    toggleBtn.addEventListener("click", () => {
        expanded = !expanded;

        if (expanded) {
            doctorCards.forEach(card => card.classList.add("show"));
            toggleBtn.textContent = "See Less Doctors";
        } else {
            doctorCards.forEach((card, index) => {
                if (index < visibleCards) {
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                }
            });
            toggleBtn.textContent = "See More Doctors";

            // Scroll back to the doctors section
            document.getElementById("doctors").scrollIntoView({
                behavior: "smooth"
            });
        }
      });













    });



