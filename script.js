// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
        });
    });
}