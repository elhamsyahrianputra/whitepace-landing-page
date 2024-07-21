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
            event.preventDefault();

            const dropdownNav = navLink.nextElementSibling;
            if (dropdownNav && dropdownNav.classList.contains('dropdown-nav')) {
                if (dropdownNav.classList.contains('show')) {
                    dropdownNav.style.maxHeight = 0;
                    dropdownNav.classList.remove('show');
                }
                else {
                    dropdownShows.forEach(function (otherDropdown) {
                        if (otherDropdown !== dropdownNav && otherDropdown.classList.contains('show')) {
                            otherDropdown.style.maxHeight = 0;
                            otherDropdown.classList.remove('show');
                        }
                    });

                    dropdownNav.style.maxHeight = dropdownNav.scrollHeight + 'px';
                    dropdownNav.classList.add('show');
                }
            }
        });
    });

    document.addEventListener('click', function (event) {
        let isClickInside = false;

        navLinks.forEach(function (navLink) {
            if (navLink.contains(event.target) || (navLink.nextElementSibling && navLink.nextElementSibling.contains(event.target))) {
                isClickInside = true;
            }
        });

        if (!isClickInside) {
            dropdownShows.forEach(function (dropdownNav) {
                if (dropdownNav.classList.contains('show')) {
                    dropdownNav.style.maxHeight = 0;
                    dropdownNav.classList.remove('show');
                }
            });
        }
    });
});
