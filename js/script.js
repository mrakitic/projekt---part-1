const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar__links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("aktivan");
  nav.classList.toggle("aktivan");
});
document.querySelectorAll("nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("aktivan");
    nav.classList.remove("aktivan");
  })
);
