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
        const about = document.createElement('div');
        about.id = "front-page";
        const image = document.createElement('img');
        image.src = require("./main.jpg");
        const textBlock = document.createElement('div');
        textBlock.id = "text-block";

        const message = document.createElement('p');
        message.classList.add("front");
        message.textContent = "{eat} invites you to try the best vegetarian dishes the world has to offer.";

        const review = document.createElement('p');
        review.classList.add("front");
        review.textContent = '"The most delightful restaurant in Antarctica."';
        const reviewLine2 = document.createElement('p');
        reviewLine2.id = "magazine";
        reviewLine2.textContent = "- Food and Beverage Magazine";

        const review2 = document.createElement('p');
        review2.classList.add("front");
        review2.textContent = '"Burst of flavor among the ice."';
        const reviewLine3 = document.createElement('p');
        reviewLine3.id = "magazine";
        reviewLine3.textContent = "- Hospitality Magazine";

        textBlock.appendChild(message);
        textBlock.appendChild(review);
        textBlock.appendChild(reviewLine2);
        textBlock.appendChild(review2);
        textBlock.appendChild(reviewLine3);
       
        about.appendChild(image);
        about.appendChild(textBlock);        

        return about
    }

    page.appendChild(about());
};

export { navLoad, aboutLoad };