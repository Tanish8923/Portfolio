// Formspree code
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);

// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });
});

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");

const tabs = document.querySelectorAll('.qualification_button');
const contents = document.querySelectorAll('.qualification_content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs and hide all sections
    tabs.forEach(t => t.classList.remove('active-tab'));
    contents.forEach(c => c.classList.add('qualification-inactive'));

    // Add active to clicked tab and show its section
    tab.classList.add('active-tab');
    contents[index].classList.remove('qualification-inactive');
  });
});


// PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpfunc);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Apply dark theme by default if no theme is set
if (!selectedTheme) {
  document.body.classList.add(darkTheme); // Add dark theme by default
  themeButton.classList.add(iconTheme);  // Add the sun icon to indicate light theme
} else {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Get current theme and icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Toggle dark theme and icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // Save the selected theme and icon to localStorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


// Typing Animation using Typed JS
var typed = new Typed(".type", {
  strings: ["Frontend", "Backend", "Full Stack"],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});
