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
// Liste des données à afficher
let plats = [
    {
      titre: "Architecto ut aperiam autem id",
      sousTitre: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      description: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.",
       image: "./public/images/specials-2.png"
    },
    {
      titre: "Unde praesentium sed",
      sousTitre: "Qui praesentium velit tempore qui quidem",
      description: "Voluptatem est necessitatibus vero nihil voluptas vel. Voluptatem omnis temporibus consequatur non doloribus.",
      image: "./public/images/specials-2.png"
    },
    {
      titre: "Pariatur explicabo vel",
      sousTitre: "Temporibus quidem rerum voluptates",
      description: "Odio veritatis perspiciatis quaerat qui aut. Dolorem fuga nam qui. Doloremque voluptas totam dolorem atque.",
      image: "./public/images/specials-2.png"
    },
    {
      titre: "Nostrum qui quasi",
      sousTitre: "Et consequatur nihil et explicabo",
      description: "Consectetur dolore illum quod. Explicabo deleniti ut eveniet. Qui eaque rerum quod.",
      image: "./public/images/specials-2.png"
    },
    {
      titre: "Iusto ut expedita aut",
      sousTitre: "Aut deserunt et doloremque velit",
      description: "Possimus soluta ut id suscipit ea ut in quo quia et soluta. Enim sit et deleniti aut fugiat. Doloribus aut vel autem.",
      image: "./public/images/specials-2.png"
    }
  ];
  
  
  let menu = document.querySelectorAll(".specials-menu li");
  let titreElement = document.getElementById("special-title");
  let sousTitreElement = document.getElementById("special-subtitle");
  let descriptionElement = document.getElementById("special-desc");
  let imageElement = document.getElementById("special-img");
  
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
     
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.remove("active");
      }
  
     
      this.classList.add("active");
  
     
      let index = this.getAttribute("data-id");
  
      
      titreElement.textContent = plats[index].titre;
      sousTitreElement.textContent = plats[index].sousTitre;
      descriptionElement.textContent = plats[index].description;
      imageElement.setAttribute("src", plats[index].image);
    });
  }
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

