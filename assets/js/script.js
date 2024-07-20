const menuButton = document.querySelector('#menu-button');
const navbarNav = document.querySelector('#navbar nav');

// Menu Button
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navbarNav.classList.toggle('show');
});

// Navbar Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownShows = document.querySelectorAll('.dropdown-nav');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            dropdownShows.forEach(dropdownShow => {
                dropdownShow.classList.remove('show');
                dropdownShow.style.maxHeight = 0;
            });
            event.preventDefault();

            const dropdownNav = navLink.nextElementSibling;
            if (dropdownNav && dropdownNav.classList.contains('dropdown-nav')) {
                if (dropdownNav.classList.contains('show')) {
                    dropdownNav.style.maxHeight = 0;
                    dropdownNav.classList.remove('show');
                }
                else {
                    dropdownNav.style.maxHeight = dropdownNav.scrollHeight + 'px';
                    dropdownNav.classList.add('show');

                    dropdownNav.addEventListener('transitionend', function () {
                        if (dropdownNav.classList.contains('open')) {
                            dropdownNav.style.maxHeight = 'none';
                        }
                    }, { once: true });
                }
            }
        });
    });
});