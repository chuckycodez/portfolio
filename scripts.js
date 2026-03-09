const sections = ["home","about","projects","contact"];
const navLinks = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
  let current = "home";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= 120) current = id;
  }

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});