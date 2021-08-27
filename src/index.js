import css from "./style.css";

import { navLoad, aboutLoad } from "./page-load.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

let activeId = "about";
navLoad();
aboutLoad();

const navbar = document.getElementById("navbar");
const page = document.getElementById("page");

function clearPage() {
    page.textContent = "";
}

navbar.addEventListener('click', (e) => {
    let clicked = e.target.id;
    clearPage();
    
    switch (clicked) {
        case "about":
            aboutLoad();
            break;
        case "menu":
            menuLoad();
            break;
        case "contacts":
            contactLoad(); 
            break;
    }

    let previousActive = document.getElementById(activeId);
    previousActive.classList.remove("active");
    e.target.classList.add("active");
    activeId = e.target.id;
});