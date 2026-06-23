// =========================
// DARK MODE TOGGLE
// =========================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(
    ".about, .product, .features, .stats, .gallery, .distributor, .contact"
);

hiddenElements.forEach(el => observer.observe(el));


// =========================
// DISTRIBUTOR FORM
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for your interest in Sip Sip Noodles! Our team will contact you shortly."
    );

    form.reset();

});


// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// SMOOTH FADE-IN
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".hero-content, .hero-image"
    );

    elements.forEach((el, index) => {

        setTimeout(() => {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }, 200 * index);

    });

});


// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("scroll", () => {

    const heroImage = document.querySelector(".hero-image img");

    let scrollValue = window.scrollY;

    heroImage.style.transform =
        `translateY(${scrollValue * 0.08}px)`;

});


// =========================
// IMAGE HOVER GLOW
// =========================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.boxShadow =
            "0 0 40px rgba(250,204,21,0.35)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.boxShadow = "none";

    });

});


// =========================
// SCROLL TO TOP
// =========================

const scrollBtn = document.createElement("div");

scrollBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.opacity = "1";

        scrollBtn.style.pointerEvents = "auto";

    } else {

        scrollBtn.style.opacity = "0";

        scrollBtn.style.pointerEvents = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
