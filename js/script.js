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
    
    const servicesToggle = document.querySelector("#services-toggle");

    serviceCards.forEach((card, index) => {
    if (index >= 3) {
        card.classList.add("hidden-card");
      }
    });

    servicesToggle.addEventListener("click", () => {

    serviceCards.forEach((card, index) => {
        if (index >= 3) {
            card.classList.toggle("hidden-card");
        }
      });

    if (servicesToggle.textContent === "View More Services") {
        servicesToggle.textContent = "View Less Services";
    } else {
        servicesToggle.textContent = "View More Services";
    }

});
   




});
