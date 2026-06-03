// Not Your College Website

document.addEventListener("DOMContentLoaded", () => {

    console.log("Not Your College Website Loaded Successfully");

    // Active Navigation Link

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.style.color = "#FF6B00";
            link.style.fontWeight = "600";

        }

    });

});
