document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger');
    let navLinks = document.getElementById('navLinks');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });

//   Menu
let filterButtons = document.querySelectorAll(".filter-btn");
let menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    let category = button.getAttribute("data-category");

    // Active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter logic
    menuItems.forEach(item => {
      if (category === "all") {
        item.style.display = "flex";
      } else {
        item.style.display = item.classList.contains(category) ? "flex" : "none";
      }
    });
  });
});
