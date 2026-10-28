export default function loadMenu() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "This is Menu Page"
    content.append(heading)
}