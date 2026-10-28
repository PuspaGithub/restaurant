export default function loadContact() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "This is Contact Page";
    content.append(heading);
}