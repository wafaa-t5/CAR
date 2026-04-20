
// MENU TOGGLE
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');     // يغير الايقونة لـ X
    navbar.classList.toggle('active'); // يظهر المينيو
};

// يقفل المينيو عند الاسكرول
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// SCROLL REVEAL
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Home
sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });

// باقي السكاشن
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top', interval: 200 });
sr.reveal('.services-container .box', { delay: 600, origin: 'top', interval: 200 });
sr.reveal('.about-container .box', { delay: 600, origin: 'top', interval: 200 });
sr.reveal('.reviews-container', { delay: 600, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });