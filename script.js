// Select the hamburger menu and the nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav links to show/hide them
    navLinks.classList.toggle('active');

    // Animate the hamburger icon (turn it into an "X" when menu is open)
    hamburger.classList.toggle('toggle');
});