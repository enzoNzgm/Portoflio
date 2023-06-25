//   MENU HAMBURGER
const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".menulink");

hamburgerButton.addEventListener("click", toggleNav);

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            hamburgerButton.classList.remove("active");
            navigation.classList.remove("active");
        }, 300);
    });
});

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

//             EFFET TEXTE

const typed = new Typed(".texte-anime", {
    strings: ["ENZO NZUGUEM", "ETUDIANT EN DEV WEB"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})



//----------------------------------------------------------
// APPARITION VERTICAL
const ratio = .1
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})
