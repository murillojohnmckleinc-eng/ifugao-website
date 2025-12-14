// ACTIVE NAV LINK
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// SCROLL FADE-IN EFFECT
const contents = document.querySelectorAll(".content");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

contents.forEach(content => observer.observe(content));
