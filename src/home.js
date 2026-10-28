export default function loadHome() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "This is Home Page"
    content.append(heading)
}