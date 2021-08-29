const contactLoad = () => {
    const page = document.getElementById("page");

    function location() {
        const div = document.createElement('div');
        const location = document.createElement('h2');
        location.textContent = "LOCATION";
        const address = document.createElement('p');
        address.textContent = "Address: 1 Airport Rd., King George Island"
        const frame = document.createElement('iframe');

        frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.7321821147466!2d-58.962581483826156!3d-62.20106788094813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc73fa98050b65c9%3A0x6aca10afc9588cd8!2sVilla%20Las%20Estrellas%2C%20Antarctica!5e0!3m2!1sen!2sru!4v1630227495737!5m2!1sen!2sru";
        frame.allowfullscreen = "";
        frame.loading = "lazy";

        div.appendChild(location);
        div.append(address);
        div.appendChild(frame);

        return div;
    }

    page.appendChild(location());

    function contacts() {
        const div = document.createElement('div');
        const reservations = document.createElement('h2');
        reservations.textContent = "RESERVATIONS";
        const phone = document.createElement('p');
        phone.textContent = "Phone: 555-123-4567";
        const email = document.createElement('p');
        email.textContent = "Email: reservations@eat.com";
        div.appendChild(reservations)
        div.appendChild(phone);
        div.appendChild(email);

        return div
    }

    page.appendChild(contacts());

};

export { contactLoad }