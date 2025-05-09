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
// & speciales//



const menuItem = document.querySelectorAll(".specials-menu li");

const specialItems = document.querySelectorAll(".special-item");


menuItem.forEach(item => {

  item.addEventListener("click", () => {

    menuItem.forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    const selectedId = item.getAttribute("data-id");

    specialItems.forEach((special, index) => {
      if (index == selectedId) {
        special.style.display = "flex"; 
      } else {
        special.style.display = "none"; 
      }
    });
  });
});

//   & reservation

  let form = document.querySelector(".php-email-form");
  let loading = document.querySelector(".loading");
  let errorMessage = document.querySelector(".error-message");
  let sentMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    
    loading.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    
    setTimeout(() => {
      loading.style.display = "none";

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      if (name === "" || email === "" || phone === "") {
        errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
        errorMessage.style.display = "block";
      } else {
        sentMessage.style.display = "block";
        form.reset(); 
      }
    }, 1500); 
  });

// & caroussel 1//

