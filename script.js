// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// ========== SCROLL FADE-IN ANIMATIONS ==========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ========== DARK / LIGHT MODE TOGGLE ==========
const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
themeToggle.innerHTML = "🌙"; // default icon
document.querySelector("header").appendChild(themeToggle);

// Check if user already selected a theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.innerHTML = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = "🌙";
  }
});

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
