document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger');
    let navLinks = document.getElementById('navLinks');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });

//   Menu
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

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

  