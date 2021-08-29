const navLoad = () => {
    let activeId = "about";
    const content = document.getElementById("content");

    function heading() {
        const element = document.createElement('h1');
        element.textContent = "{ eat }";
        return element
    }

    content.appendChild(heading());

    function navbar() {
        const nav = document.createElement('ul');
        nav.id = "navbar";
        const about = document.createElement('li');
        about.textContent = "about";
        about.id = "about";
        about.classList.add("active");
        const menu = document.createElement('li');
        menu.textContent = "menu";
        menu.id = "menu";
        const contacts = document.createElement('li');
        contacts.textContent = "contacts";
        contacts.id = "contacts";
        
        nav.appendChild(about);
        nav.appendChild(menu);
        nav.appendChild(contacts);
        return nav;
    }

    content.appendChild(navbar());

    const page = document.createElement('div');
    page.id = "page";
    content.appendChild(page);
};

const aboutLoad = () => {
    const page = document.getElementById("page");

    function about() {
        const image = document.createElement('img');
        image.src = require("./main.jpg");
        return image
    }

    page.appendChild(about());
};

export { navLoad, aboutLoad };