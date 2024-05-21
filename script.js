// JavaScript to enhance the Amazon-like website

document.addEventListener("DOMContentLoaded", function () {

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            alert(`Searching for: ${query}`);
            // Add functionality to perform search
            // e.g., redirect to search results page or filter products on the page
        }
    });

    // Hover effect for the navigation items
    const navItems = document.querySelectorAll('.border');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.borderColor = 'white';
        });
        item.addEventListener('mouseout', function () {
            item.style.borderColor = 'transparent';
        });
    });

    // Dummy "See more" functionality
    const seeMoreLinks = document.querySelectorAll('.box-content p');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function () {
            alert(`Redirecting to more about ${link.previousElementSibling.innerText}`);
            // Add functionality to redirect to the corresponding category page
        });
    });

    // "Back to Top" button functionality
    const backToTopButton = document.querySelector('.foot-panel1');
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
// frontend/script.js
document.addEventListener('DOMContentLoaded', async () => {
    const productsSection = document.querySelector('.products');

    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
});


// More JavaScript functionalities can be added as required
