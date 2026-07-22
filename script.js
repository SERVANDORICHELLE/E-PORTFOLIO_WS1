// ===============================
// Portfolio Script
// ===============================

// ---------- Theme Toggle ----------
function changeTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    typeWriter();
};

// ---------- Personal Information ----------
function showInfo() {

    alert(
`👤 PERSONAL INFORMATION

Name:
Richelle Fabillon Servando

Course:
Bachelor of Science in Information Technology

Year:
3rd Year College

Dream Career:
Software Developer

Skills:
• HTML
• CSS
• JavaScript
• Python

Thank you for visiting my portfolio!`
    );

}

// ---------- Typewriter Effect ----------
const title = "Richelle Fabillon Servando";
let index = 0;

function typeWriter() {

    const element = document.getElementById("title");

    element.innerHTML = "";

    function typing() {

        if (index < title.length) {

            element.innerHTML += title.charAt(index);

            index++;

            setTimeout(typing, 100);

        }

    }

    typing();

}

// ---------- Smooth Navigation ----------
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ---------- Fade In Animation ----------
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});

// ---------- Random Accent Color ----------
const colors = [
    "#00bcd4",
    "#7c4dff",
    "#ff4081",
    "#00c853",
    "#ff9800",
    "#03a9f4",
    "#e91e63"
];

function changeAccent() {

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.documentElement.style.setProperty(
        "--accent",
        randomColor
    );

}

setInterval(changeAccent, 5000);

// ---------- Welcome Message ----------
setTimeout(() => {

    console.log("Welcome to Richelle's Portfolio!");

}, 1000);

// ---------- Scroll Progress Bar ----------
const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "5px";
progress.style.width = "0%";
progress.style.background = "#00bcd4";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// ---------- Back To Top Button ----------
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.background = "#00bcd4";
topButton.style.color = "white";
topButton.style.fontSize = "18px";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
