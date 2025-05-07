document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger');
    let navLinks = document.getElementById('navLinks');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });
  