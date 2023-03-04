function menushow() {
  let menumobile = document.querySelector(".mobile-menu");
  if (menumobile.classList.contains("open")) {
    menumobile.classList.remove("open");
    document.querySelector(".icon").src = "./img/menu-black.svg";
  } else {
    menumobile.classList.add("open");
    document.querySelector(".icon").src = "./img/menu-close.svg";
  }
}
