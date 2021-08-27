const contactLoad = () => {
    const page = document.getElementById("page");

    function contacts() {
        const contacts = document.createElement('h2');
        contacts.textContent = "CONTACTS";
        return contacts
    }

    page.appendChild(contacts());

};

export { contactLoad }