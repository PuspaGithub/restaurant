# Sunny Side Diner — Restaurant Page

A single-page restaurant website with tabbed navigation, built for the [Restaurant Page project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) in The Odin Project's JavaScript course.

The HTML template only contains the header, an empty `div#content` and the footer. Everything inside `div#content` (the Home, Menu and Contact pages) is created with JavaScript and swapped in when a tab is clicked.

**Live demo:** [puspagithub.github.io/restaurant](https://puspagithub.github.io/restaurant/)

## Features

- **Tabbed navigation:** Home, Menu and Contact buttons switch the page content without reloading.
- **Active tab highlight:** the button for the current tab is highlighted.
- **DOM-built pages:** each tab is created with `document.createElement` and appended to the page.
- **Data-driven menu:** dishes are stored in an array of objects and rendered with nested loops, so adding a dish only means adding one object.
- **Linked buttons:** "See the menu" and "Find Us" on the Home page open the Menu and Contact tabs.
- **Responsive layout:** cards and images stack into one column on small screens.

## Built with

- HTML, CSS and JavaScript (ES modules)
- [Webpack](https://webpack.js.org/) with `webpack-dev-server`
- `html-webpack-plugin`, `style-loader` and `css-loader`
- Fonts: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Project structure

```text
restaurant/
├── src/
│   ├── template.html   # Header, nav buttons, empty div#content and footer
│   ├── index.js        # Entry point: loads the Home tab and handles tab switching
│   ├── home.js         # Builds the Home tab (hero, feature boxes, testimonial)
│   ├── menu.js         # Menu data + builds the Menu tab
│   ├── contact.js      # Builds the Contact tab (address, opening hours, map)
│   └── styles.css      # All styles
├── dist/               # Production build (created by webpack, not committed to main)
├── webpack.config.js
├── package.json
└── .gitignore
```

## How it works

1. `template.html` has the header with three nav buttons and an empty `<div id="content">`.
2. Each tab module (`home.js`, `menu.js`, `contact.js`) exports one default function, such as `loadHome()`. It builds that tab's elements and appends them to `div#content`.
3. `index.js` imports the three functions and calls `loadHome()` when the page first loads.
4. Each nav button has a click listener that:
   - removes the `active` class from all nav buttons and adds it to the clicked one,
   - clears `div#content`,
   - calls the matching load function to build the new tab.

### Two ways of creating elements

I built the tabs with two different approaches so I could compare them.

**1. Line by line (`home.js` and `contact.js`)**

Each element is created, given a class and given text in separate steps:

```js
const h1 = document.createElement("h1");
h1.classList.add("contact-heading");
h1.textContent = "Come Say Hi";
```

This shows exactly what happens at each step, but it gets long and repetitive when a page has many elements.

**2. With a helper function (`menu.js`)**

A small `create` function does all three steps at once:

```js
function create(tag, classes, text) {
    const item = document.createElement(tag);
    if (classes) item.classList.add(...classes.split(" "));
    if (text) item.textContent = text;
    return item;
}

const heading = create("h1", "menu-heading", "Our Menu");
```

Each element now takes one line instead of three. Combined with loops over the menu data, it builds all four categories and twelve dishes in a few lines of code.

### Editing the menu

The menu is stored as data at the top of `src/menu.js`:

```js
const menu = [
    {
        category: "Pancakes & Waffles",
        items: [
            { name: "Classic Buttermilk Stack", price: "$11", description: "Three fluffy pancakes, whipped butter, maple syrup." },
            // ...
        ],
    },
    // ...
];
```

To add a dish, add an object to a category's `items` array. To add a category, add a new object with `category` and `items`. The page builds the new cards for you.

## Getting started

You need [Node.js](https://nodejs.org/) installed.

```bash
# 1. Clone the repository
git clone https://github.com/puspagithub/restaurant.git
cd restaurant

# 2. Install dependencies
npm install

# 3. Start the development server
npx webpack serve
```

Then open [http://localhost:8080](http://localhost:8080) in your browser. The page reloads when you save a file.

To create a production build in `dist/`:

```bash
npx webpack
```

## Deployment

The site is deployed to GitHub Pages from the `gh-pages` branch, which contains only the contents of `dist/`.

First time only:

```bash
git branch gh-pages
```

Every time you deploy:

```bash
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

In the repository's **Settings → Pages**, set the source branch to `gh-pages`.

## What I learned

- Setting up a project with Webpack, loaders and a dev server
- Splitting code into ES modules with `export default` and `import`
- Creating and nesting elements with `createElement` and `append`, both line by line and with a reusable helper function
- Rendering repeated content from arrays with nested loops
- Variable scope inside loops (`const` declared inside a block only exists there)
- Handling click events and toggling classes for the active tab
- Deploying a bundled project to GitHub Pages with `git subtree`

## Credits

- Design inspiration: [Beary's Breakfast Bar](https://web.archive.org/web/20221024060550/https://eckben.github.io/bearysBreakfastBar/) by a fellow Odin Project student
- Project brief: [The Odin Project](https://www.theodinproject.com/)