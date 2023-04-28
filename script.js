const toggleBtn = document.querySelector(".btn-toggle");
const navLinks = document.querySelectorAll(".mob-items .mob-item a");
const mobMenu = document.querySelector(".my-mob-items");
const mobItem = document.querySelector(".mob-item");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobMenu.classList.remove("open");
  });
});

toggleBtn.addEventListener("click", () => {
  if (mobMenu.style.display != "block") {
    mobMenu.style.display = "block";
  } else {
    mobMenu.style.display = "none";
  }

  // console.log('toggleBtn clicked');
});