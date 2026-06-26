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
let animated = false;

const observerCounter = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
            counter.innerText = "0";
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;
                const increment = target / 50; // Made it slightly faster
                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCounter();
        });
    }
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if(statsSection) observerCounter.observe(statsSection);

// =========================
// SCROLL REVEAL ANIMATION
// =========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

// =========================
// DISTRIBUTOR FORM
// =========================
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your interest in Sip Sip Noodles! Our team will contact you shortly.");
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
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// =========================
// PARALLAX EFFECT
// =========================
window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-image img");
    if(heroImage) {
        let scrollValue = window.scrollY;
        heroImage.style.transform = `translateY(${scrollValue * 0.05}px)`;
    }
});