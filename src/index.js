import "./styles.css";
import loadMenu from "./menu.js";
import loadHome from "./home.js";
import loadContact from "./contact.js";

const content = document.getElementById("content");

function switchPage(loadPage){
    content.textContent="";
    loadPage();
}

loadHome();
const buttons = document.querySelectorAll(".nav-btn");

document.getElementById("home-btn").addEventListener("click", (e) => {
    buttons.forEach(btn => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");

    switchPage(loadHome);
});


document.getElementById("menu-btn").addEventListener("click", (e) => {
    buttons.forEach(btn => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
    switchPage(loadMenu)
});


document.getElementById("contact-btn").addEventListener("click", (e) => {
    buttons.forEach(btn => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
    switchPage(loadContact)
});