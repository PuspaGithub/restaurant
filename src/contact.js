function contactHeroText() {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.classList.add("contact-heading")
    h1.textContent = "Come Say Hi";

    const p = document.createElement("p");
    p.textContent = "Walk-ins welcome. Call ahead for groups of six or more."

    div.append(h1, p);

    return div;
    
}

function findUsMap() {
    const findUsMap = document.createElement("div");
    findUsMap.classList.add("findUs-Map");

    const contactInfo = document.createElement("section");
    contactInfo.classList.add("contact-info");

    const addressPhone = document.createElement("div");
    addressPhone.classList.add("address-phone")

    const address = document.createElement("div");
    address.classList.add("address")

    const findUs = document.createElement("h1");
    findUs.classList.add("find-us");
    findUs.textContent = "Find Us";

    const p1 = document.createElement("p");
    p1.textContent = " 73 North Edgely Avenue"

    const p2 = document.createElement("p");
    p2.textContent = "Toronto, Ontario, Canada, M1K 1T8";

    const phoneInfo = document.createElement("div");
    phoneInfo.classList.add("phoneInfo");

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = "Phone: (437) 599-3058";

    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = "Email: pusparajadhikari0@gmail.com";

    phoneInfo.append(phone, email);

    address.append(findUs, p1, p2);

    addressPhone.append(address, phoneInfo);

    const hours = document.createElement("div");
    hours.classList.add("hours");

    const openingHrs = document.createElement("h1");
    openingHrs.textContent = "Opening Hours"

    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <td>Monday - Friday</td>
            <td>7am - 3pm</td>
        </tr>
        <tr>
            <td>Saturday</td>
            <td>8am - 4pm</td>
        </tr>
        <tr>
            <td>Sunday</td>
            <td>8am - 2pm</td>
        </tr>
    `

    hours.append(openingHrs, table)

    contactInfo.append(addressPhone, hours);

    const map = document.createElement("section");
    map.classList.add("map");
    map.textContent = "[This is the map]"

    findUsMap.append(contactInfo, map);

    return findUsMap;
}

function hr() {
    const hr = document.createElement("hr");

    return hr;
}

function footer() {
    const p = document.createElement("p");
    p.classList.add("footer");
    p.textContent = "Sunny side Dinner | Built fo the Odin Project"

    return p;
}

export default function loadContact() {
    const content = document.getElementById("content");
    const contactPage = document.createElement("div")
    contactPage.classList.add("contact-page");

    contactPage.append(contactHeroText(), findUsMap());
    
    content.append(contactPage);
}