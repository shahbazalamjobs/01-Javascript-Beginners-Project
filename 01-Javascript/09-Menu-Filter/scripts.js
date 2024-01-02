
const menuItems = [
    { id: 1, name: 'Caprese Salad', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?salad', price: 10.99, details: 'Fresh and juicy tomatoes paired with creamy mozzarella and aromatic basil, drizzled with balsamic glaze. A classic Italian delight!' },
    { id: 2, name: 'Margherita Pizza', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?pizza', price: 19.99, details: 'A timeless favorite featuring a thin crust, rich tomato sauce, fresh mozzarella, and basil leaves. Simple yet incredibly flavorful!' },
    { id: 3, name: 'Chocolate Lava Cake', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?cake', price: 8.99, details: 'Indulge in the decadence of warm chocolate lava oozing from a moist and spongy cake. A heavenly treat for chocolate lovers!' },
    { id: 4, name: 'Bruschetta', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?bruschetta', price: 8.49, details: 'Crispy slices of baguette topped with diced tomatoes, fresh basil, garlic, and a drizzle of olive oil. A delightful appetizer to kick off your meal!' },
    { id: 5, name: 'Chicken Alfredo', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?pasta', price: 24.99, details: 'Tender chicken breast slices served on a bed of fettuccine pasta, smothered in a rich and creamy Alfredo sauce. A comforting and satisfying main course!' },
    { id: 6, name: 'Tiramisu', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?tiramisu', price: 10.49, details: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder. An irresistible and classic Italian dessert!' },
    { id: 7, name: 'Caesar Salad', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?caesar-salad', price: 9.99, details: 'Crisp romaine lettuce, garlic croutons, parmesan cheese, and tangy Caesar dressing. A refreshing and savory salad option!' },
    { id: 8, name: 'Pepperoni Pizza', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?pepperoni-pizza', price: 21.99, details: 'Classic pizza topped with generous amounts of spicy pepperoni, gooey mozzarella cheese, and zesty tomato sauce. A crowd-pleasing main course!' },
    { id: 9, name: 'Cheesecake', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?cheesecake', price: 12.99, details: 'Velvety smooth and rich cheesecake with a buttery graham cracker crust. A sweet and indulgent way to end your meal!' },
    { id: 10, name: 'Spinach Dip', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?spinach-dip', price: 7.99, details: 'Creamy spinach and artichoke dip served warm with tortilla chips. A delicious and shareable appetizer for any occasion!' },
    { id: 11, name: 'Spaghetti Bolognese', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?spaghetti', price: 17.99, details: 'Classic spaghetti pasta tossed in a savory and hearty Bolognese sauce made with ground beef, tomatoes, and aromatic herbs. A satisfying main course!' },
    { id: 12, name: 'Strawberry Shortcake', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?strawberry-shortcake', price: 11.49, details: 'Layers of fluffy shortcake, fresh strawberries, and whipped cream. A delightful and fruity dessert option!' },
    { id: 13, name: 'Mozzarella Sticks', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?mozzarella-sticks', price: 6.99, details: 'Crispy breaded mozzarella sticks served with marinara sauce. An irresistible and cheesy appetizer for cheese lovers!' },
    { id: 14, name: 'BBQ Chicken Pizza', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?bbq-chicken-pizza', price: 23.99, details: 'Delicious pizza topped with barbecue sauce, grilled chicken, red onions, and cilantro. A savory and flavorful main course option!' },
    { id: 15, name: 'Banana Split', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?banana-split', price: 9.49, details: 'A classic banana split with scoops of vanilla, chocolate, and strawberry ice cream, topped with whipped cream, chocolate sauce, and cherries. A delightful and nostalgic dessert!' },
    { id: 16, name: 'Garlic Knots', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?garlic-knots', price: 5.99, details: 'Soft and fluffy garlic knots brushed with garlic butter and sprinkled with parsley. A perfect and savory appetizer!' },
    { id: 17, name: 'Vegetarian Pizza', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?vegetarian-pizza', price: 20.99, details: 'Vibrant and delicious pizza loaded with colorful vegetables, tomato sauce, and melted mozzarella cheese. A tasty vegetarian main course option!' },
    { id: 18, name: 'Key Lime Pie', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?key-lime-pie', price: 10.99, details: 'Tangy and refreshing key lime pie with a buttery graham cracker crust. A zesty and delightful dessert!' },
    { id: 19, name: 'Buffalo Wings', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?buffalo-wings', price: 11.99, details: 'Spicy and crispy buffalo wings served with celery sticks and blue cheese dressing. A perfect appetizer for spice enthusiasts!' },
    { id: 20, name: 'Shrimp Scampi', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?shrimp-scampi', price: 26.99, details: 'Juicy shrimp sautéed in garlic, white wine, and butter, served over a bed of linguine. A flavorful and seafood-packed main course!' },
    { id: 21, name: 'Blueberry Cheesecake', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?blueberry-cheesecake', price: 13.49, details: 'Creamy cheesecake swirled with blueberry compote, nestled on a crumbly graham cracker crust. A sweet and fruity delight for dessert lovers!' },
    { id: 22, name: 'Avocado Toast', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?avocado-toast', price: 9.99, details: 'Sliced avocado on toasted artisanal bread, drizzled with olive oil, and sprinkled with sea salt and red pepper flakes. A trendy and nutritious appetizer!' },
    { id: 23, name: 'Pesto Pasta Primavera', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?pesto-pasta', price: 18.99, details: 'Pasta tossed in a vibrant pesto sauce with assorted fresh vegetables. A flavorful and vegetarian-friendly main course option!' },
    { id: 24, name: 'Mango Sorbet', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?mango-sorbet', price: 7.49, details: 'Cool and refreshing mango sorbet served in a chilled bowl. A light and fruity dessert to cleanse your palate!' },
    { id: 25, name: 'Stuffed Mushrooms', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?stuffed-mushrooms', price: 10.99, details: 'Mushroom caps filled with a savory mixture of breadcrumbs, herbs, and cheese, baked to perfection. A flavorful and satisfying appetizer!' },
    { id: 26, name: 'Salmon Teriyaki', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?salmon-teriyaki', price: 28.99, details: 'Grilled salmon glazed with teriyaki sauce, served with steamed jasmine rice and stir-fried vegetables. A delicious and nutritious seafood main course!' },
    { id: 27, name: 'Raspberry Tart', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?raspberry-tart', price: 11.99, details: 'Buttery tart crust filled with sweet raspberry preserves and topped with fresh raspberries. A delightful and visually appealing dessert!' },
    { id: 28, name: 'Crispy Calamari', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?crispy-calamari', price: 12.99, details: 'Tender calamari rings coated in a crispy seasoned batter, served with marinara sauce. A popular and satisfying appetizer!' },
    { id: 29, name: 'Eggplant Parmesan', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?eggplant-parmesan', price: 22.99, details: 'Slices of eggplant breaded and baked, layered with marinara sauce and melted mozzarella cheese. A delicious and hearty vegetarian main course!' },
    { id: 30, name: 'Mint Chocolate Chip Ice Cream', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?mint-chocolate-chip-ice-cream', price: 8.49, details: 'Smooth and creamy mint-flavored ice cream with chocolate chips. A refreshing and classic dessert choice!' },
    { id: 31, name: 'Cucumber Roll', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?cucumber-roll', price: 8.99, details: 'Refreshing cucumber slices rolled with avocado, crabstick, and sushi rice, served with soy sauce and wasabi. A light and healthy appetizer!' },
    { id: 32, name: 'Chicken Quesadilla', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?quesadilla', price: 16.99, details: 'Grilled flour tortillas filled with seasoned chicken, melted cheese, onions, and bell peppers. Served with salsa and sour cream. A satisfying and flavorful main course!' },
    { id: 33, name: 'Pineapple Upside-Down Cake', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?pineapple-upside-down-cake', price: 10.99, details: 'Moist vanilla cake topped with caramelized pineapple rings and maraschino cherries. A sweet and nostalgic dessert option!' },
    { id: 34, name: 'Vegetable Spring Rolls', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?spring-rolls', price: 9.49, details: 'Crispy spring rolls filled with julienned vegetables and vermicelli noodles, served with sweet and sour dipping sauce. A light and crunchy appetizer!' },
    { id: 35, name: 'Beef Stroganoff', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?stroganoff', price: 25.99, details: 'Tender strips of beef cooked in a creamy mushroom and onion sauce, served over egg noodles. A comforting and hearty main course!' },
    { id: 36, name: 'Mango Salsa', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?mango-salsa', price: 7.99, details: 'Fresh mango chunks mixed with tomatoes, red onions, cilantro, and lime juice. Served with tortilla chips. A fruity and zesty appetizer!' },
    { id: 37, name: 'Lemon Sorbet', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?lemon-sorbet', price: 8.49, details: 'Tangy and refreshing lemon sorbet served in a chilled bowl. A light and citrusy dessert option!' },
    { id: 38, name: 'Stuffed Bell Peppers', category: 'main-course', imgSrc: 'https://source.unsplash.com/800x600/?stuffed-bell-peppers', price: 19.99, details: 'Bell peppers filled with a flavorful mixture of ground beef or turkey, rice, tomatoes, and spices. Baked to perfection. A delicious and colorful main course!' },
    { id: 39, name: 'Chocolate Covered Strawberries', category: 'dessert', imgSrc: 'https://source.unsplash.com/800x600/?chocolate-covered-strawberries', price: 11.99, details: 'Juicy strawberries dipped in smooth chocolate, creating a sweet and decadent treat. A delightful dessert option!' },
    { id: 40, name: 'Cajun Shrimp Skewers', category: 'appetizer', imgSrc: 'https://source.unsplash.com/800x600/?cajun-shrimp-skewers', price: 12.99, details: 'Spicy cajun-marinated shrimp skewers grilled to perfection, served with a tangy dipping sauce. A flavorful and bold appetizer!' },
];


function displayMenu(items) {

    const menuContainer = document.querySelector('.menu__container');
    menuContainer.innerHTML = '';

    items.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu__item';

        const menuItemImage = document.createElement('div');
        menuItemImage.className = 'menu__itemImage';

        const menuImg = document.createElement('img');
        menuImg.className = 'menu__image';
        menuImg.src = item.imgSrc;
        menuImg.alt = item.name;

        menuItemImage.append(menuImg);

        const menuDetails = document.createElement('div');
        menuDetails.className = 'menu__details';

        menuDetails.innerHTML = `
            <h3 class="name">${item.name}</h3>
            <p class="category">${item.category}</p>
            <p class="price">${item.price}</p>
        `;

        menuItem.append(menuItemImage);
        menuItem.append(menuDetails);
        menuContainer.append(menuItem);

        // Add click event listener to each menu item
        menuItem.addEventListener('click', () => openModal(item.imgSrc, item.name, item.details));
    });
}


function filterMenu(category) {
    const filteredItems = menuItems.filter(item => category === 'all' || item.category === category);
    displayMenu(filteredItems);
}

// Initial display of all menu items
displayMenu(menuItems);


function filterMenu(category) {
    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}


// modal 

function openModal(imgSrc, altText, details) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <img src="${imgSrc}" alt="${altText}" class="modal-image">
        <p class="modal-text">${altText}</p>
        <p class="modal-details"> ${details} hello </p>
    `;

    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Initial display of all menu items
displayMenu(menuItems);
