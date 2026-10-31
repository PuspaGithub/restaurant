function createHero () {
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    
    const breakfast = document.createElement("div");
    breakfast.classList.add("breakfast");

    const p = document.createElement("p");
    p.textContent = "BREAKFAST & BRUNCH ~ SINCE 1987"

    const h1 = document.createElement("h1");
    h1.classList.add("hero-text-h1");
    h1.textContent = "Pancakes worth getting out of bed for."

    const para = document.createElement("p");
    para.textContent = "Fluffy buttermilk stacks, crispy hash browns and bottomless coffee, served all day in a sunny little corner of town."

    const heroBtns = document.createElement("div")
    heroBtns.classList.add("hero-btns");
    
    const herobtn1 = document.createElement("button");
    herobtn1.classList.add("hero-btn", "btn-active");
    herobtn1.textContent = "See the menu";

    const herobtn2 = document.createElement("button");
    herobtn2.classList.add("hero-btn");
    herobtn2.textContent = "Find Us";

    heroBtns.append(herobtn1, herobtn2);

    breakfast.append(p);
    heroText.append(breakfast, h1, para, heroBtns);

    const heroImg = document.createElement("div");
    heroImg.classList.add("hero-img");

    const img = document.createElement("div");
    img.classList.add("img");

    heroImg.append(img);

    hero.append(heroText, heroImg);

    return hero;
}

function homeAboutCompany(){
    const homeAboutCompany= document.createElement("div");
    homeAboutCompany.classList.add("home-about-company");

    // BOX - 1
    const box1 = document.createElement("div");
    box1.classList.add("bottom-box", "box-1");

    const box1H2 = document.createElement("h2");
    box1H2.textContent = "Made from scratch"

    const box1P = document.createElement("p");
    box1P.textContent = "Batter mixed every morning, eggs from a farm down the road."

    box1.append(box1H2, box1P);

    // BOX - 2
    const box2 = document.createElement("div");
    box2.classList.add("bottom-box", "box-2");

    const box2H2 = document.createElement("h2");
    box2H2.textContent = "Breakfast all day"

    const box2P = document.createElement("p");
    box2P.textContent = "Waffles at 3PM? Absolutely, No judgement here."

    box2.append(box2H2, box2P);

    // BOX - 3
    const box3 = document.createElement("div");
    box3.classList.add("bottom-box", "box-3");

    const box3H2 = document.createElement("h2");
    box3H2.textContent = "Made from scratch"

    const box3P = document.createElement("p");
    box3P.textContent = "Batter mixed every morning, eggs from a farm down the road."

    box3.append(box3H2, box3P);

    homeAboutCompany.append(box1, box2, box3);

    return homeAboutCompany;
}

function customerTestimoni() {
    const customerTestimoni = document.createElement("div");
    customerTestimoni.classList.add("customer-testimoni");

    const h1 = document.createElement("h1");
    h1.textContent = "Best hash brown in the city - crispy edges, every time."

    const p = document.createElement("p");
    p.textContent = "-[Customer name]"

    customerTestimoni.append(h1, p);

    return customerTestimoni;
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

export default function loadHome() {
    const content = document.getElementById("content");

    content.textContent = "";

    content.append(createHero(), homeAboutCompany(), customerTestimoni(), hr(), footer());
    
}


// export default function loadHome() {
//     const content = document.getElementById("content");

//     const h1 = document.createElement("h1");
//     h1.textContent = "This is the home pageee"
//     content.append(h1);
// }