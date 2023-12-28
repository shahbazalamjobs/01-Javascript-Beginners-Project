// script.js

var toggleButton = document.querySelector('.sidebar__toggle-btn');
toggleButton.addEventListener('click', () => {
    toggleSidebar();
});

var toggleCloseButton = document.querySelector('.sidebar__toggle-close-btn');
toggleCloseButton.addEventListener('click', () => {
    toggleSidebar();
});

function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var content = document.querySelector(".content");

    // Toggle the 'sidebar-open' class
    sidebar.classList.toggle('sidebar-open');

    // Toggle the 'content-shifted' class
    content.classList.toggle('content-shifted');

}
