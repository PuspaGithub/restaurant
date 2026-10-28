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

document.getElementById("home-btn").addEventListener("click", () => switchPage(loadHome));


document.getElementById("menu-btn").addEventListener("click", () => switchPage(loadMenu));


document.getElementById("contact-btn").addEventListener("click", () => switchPage(loadContact));