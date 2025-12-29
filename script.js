const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  toggleBtn.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});

const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
  }
});

const titleText = "Hello, I'm Xavier";
const titleElement = document.getElementById("jump-title");
titleElement.classList.add("jump");

if (!titleElement.innerHTML.trim()) {
  titleText.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${i * 0.09}s`;
    titleElement.appendChild(span);
  });
}

const welcomeText = "Welcome to my portfolio!";
const welcomeElement = document.getElementById("Welcome-title");
welcomeElement.classList.add("flip");
welcomeElement.textContent = "";

welcomeText.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.style.animationDelay = `${i * 0.08}s`;
  welcomeElement.appendChild(span);
});


const revealElements = document.querySelectorAll(".reveal-right");
const observerReveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
}, { threshold: 0.15 });
revealElements.forEach(el => observerReveal.observe(el));

const skillCards = document.querySelectorAll(".skill-card");
const observerSkills = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("active"), index * 120);
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 });
skillCards.forEach(card => observerSkills.observe(card));

const projectCards = document.querySelectorAll(".slide-left, .slide-right");
const observerProjects = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
}, { threshold: 0.3 });
projectCards.forEach(card => observerProjects.observe(card));
