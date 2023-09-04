function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: '2000',
  delay: 200
});

ScrollReveal().reveal('.title, .section__text__p1,.section__text__p2', { delay: 500 });