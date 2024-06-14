// Create dropdown menu when user uses smaller screen sizes
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.dropdown');

    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    // Set initial state for menu display to 'none' if not set
    if (menu.style.display === '') {
        menu.style.display = 'none';
    }
});
