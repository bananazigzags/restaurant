const menuLoad = () => {
    const page = document.getElementById("page");

    function breakfast() {
        const breakfast = document.createElement('h2');
        breakfast.textContent = "BREAKFAST";
        return breakfast
    }

    page.appendChild(breakfast());

    function lunch() {
        const lunch = document.createElement('h2');
        lunch.textContent = "LUNCH";
        return lunch
    }

    page.appendChild(lunch());

    function drinks() {
        const drinks = document.createElement('h2');
        drinks.textContent = "DRINKS";
        return drinks
    }

    page.appendChild(drinks());

};

export { menuLoad } 