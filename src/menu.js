const menu = [
    {
        category: "Pancakes & Waffles",
        items: [
            {
                name: "Classic Buttermilk Stack",
                price: "$11",
                description: "Three fluffy pancakes, whipped buttter, maple syrup."
            },
            {
                name: "Blueberry Lemon Stack",
                price: "$12",
                description: "Wild blueberries and lemon zest folded into the batter."
            },
            {
                name: "Belgian Waffle",
                price: "$12",
                description: "Crisp outside, soft inside, berries and cream."
            }
        ]
    },
    {
        category: "Eggs & Savoury",
        items: [
            {
                name: "Sunny Side Plate",
                price: "$11",
                description: "Two eggs and style, bacon, hash browns, toast."
            },
            {
                name: "Veggie Omlette",
                price: "$12",
                description: "Peppers, spinach, mushrooms, and cheddar."
            },
            {
                name: "Breakfast Burrito",
                price: "$12",
                description: "Scrambled eggs, and chorizo, salsa verde."
            }
        ]
    },
    {
        category: "Sides",
        items: [
            {
                name: "Crispy Hash Browns",
                price: "$5",
                description: "Shredded, griddled, golden."
            },
            {
                name: "Thick-cut Bacon",
                price: "$7",
                description: "Four strips, maple glazed."
            },
            {
                name: "Fresh Fruit Cup",
                price: "$12",
                description: "Whatever is in season."
            }
        ]
    },
    {
        category: "Drinks",
        items: [
            {
                name: "Bottomless Coffee",
                price: "$5",
                description: "Our house roast, refilled all morning."
            },
            {
                name: "Fresh Orange Juice",
                price: "$7",
                description: "Squeezed to order."
            },
            {
                name: "Hot Chocolate",
                price: "$5",
                description: "Topped with whipped cream."
            }
        ]
    }
]

function create(tag, classes, text){
    const item = document.createElement(tag);
    if (classes) item.classList.add(...classes.split(" "));
    if (text) item.textContent = text;
    return item;
}

function menuIntro() {
    const menuHeading = create("h1", "menu-heading", "Our Menu");
    const description = create("p", "", "Everything served until close. Ask about gluten-free batter and oat milk.")

    const menuIntro = create("div", "menu-intro");

    menuIntro.append(menuHeading, description);
 
    return menuIntro;
}

function menuGrid(menu) {
    const menuGrid = create("div", "menu-grid");

    for(let i=0; i<menu.length; i++){
        const menuCategory = create("section", "menu-category");
        const categoryTitle = create("h2", "category-title", menu[i]["category"]);
        menuCategory.append(categoryTitle); // menuCategories are added here and inside the another loop sepretly
                                            // as if it is not done that way the menuItem won't be detected.

        for(let j=0; j<menu[i]["items"].length; j++){
            const menuItem = create("div", "menu-item");
            const itemTop = create("div", "item-top");

            const itemTopName = create("h3", "", menu[i]["items"][j]["name"]);
            const price = create("span", "price", menu[i]["items"][j]["price"])

            const description = create("p", "", menu[i]["items"][j]["description"])

            itemTop.append(itemTopName, price);

            menuItem.append(itemTop, description);

            menuCategory.append(menuItem);
        }

        
        menuGrid.append(menuCategory);
        
        
        
    }

    return menuGrid;
}


export default function loadMenu() {
    const content = document.getElementById("content");

    content.textContent = "";

    // menu page div
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    menuPage.append(menuIntro(), menuGrid(menu));

    content.append(menuPage)
}