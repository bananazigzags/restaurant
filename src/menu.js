const menuLoad = () => {
    const page = document.getElementById("page");

    const menu = [
        [   "BREAKFAST",
            [
                { name: "Eggs Benedict", price: "$8.50" },
                { name: "Avocado Toast with Burst Tomatoes and Blue Cheese", price: "$9.00" },
                { name: "Muesli with Oat Milk and Honey", price: "$8.00" },
                { name: "Protein Packed Pancakes with Cottage Cheese and Fresh Berries", price: "$8.50" },
            ]
        ],
        [ 
            "LUNCH & DINNER",
            [
                { name: "Arugula Salad with Mozarella, Grilled Bellpeppers, Pear, and Walnuts", price: "$12.50" },
                { name: "Beyond Burger with Fries", price: "$18.00" },
                { name: "Falafel Wrap with Avocado and Pomegranate", price: "$18.50" },
                { name: "Seitan Fajitas with Wasabi Avocado Cream", price: "$20.00" },
                { name: "Pad Thai with Tofu and Vegetables", price: "$14.00" },
                { name: "Coconut Curry with Pumpkin and Fried Tofu", price: "$16.00"}
            ]
        ],
        [
            "DRINKS",
            [
                { name: "Your Choice of Coffee", price: "$3.00" },
                { name: "Your Choice of Tea", price: "$2.00" },
                { name: "Very Berry Smoothie", price: "$5.00" },
                { name: "Green Smoothie", price: "$4.50" },
                { name: "Berry-Infused Sparkling Water", price: "$1.00" },
                { name: "Freshly Squeezed Juice Orange/Apple/Carrot/Grapefruit", price: "$4.50" },
                { name: "House Wine Red/White/Rose", price: "$7.00" }
            ]
        ]
    ]

    const menuPrinter = (array) => {
        array.forEach((section) => {
            const div = document.createElement('div');
            const heading = document.createElement('h2');
            heading.textContent = section[0];
            const table = document.createElement('table');

            section[1].forEach((item) => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                name.textContent = item.name;
                const price = document.createElement('td');
                price.classList.add("price");
                price.textContent = item.price;
                row.appendChild(name);
                row.appendChild(price);
                table.appendChild(row);
            });

            div.appendChild(heading);
            div.appendChild(table);
            
            page.appendChild(div);
        });
    };

    menuPrinter(menu);
};

export { menuLoad } 