// Menu Button
const menuButton = document.querySelector('#menu-button');
const navbarNav = document.querySelector('#navbar nav');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navbarNav.classList.toggle('show');
});

// Login Form Toggle
let loginButtonToggles = document.querySelectorAll("#btn-login");
let loginButtonClose = document.querySelector("#btn-close");
let loginModal = document.querySelector("#login-modal")
let loginCard = document.querySelector("#login-card")

loginButtonToggles.forEach((loginButtonToggle) => {
    loginButtonToggle.addEventListener('click', function () {
        loginModal.classList.add('show')
    });
});

loginButtonClose.addEventListener('click', function () {
    loginModal.classList.remove('show')
});
window.addEventListener('click', function (event) {
    if (event.target == loginModal && !loginCard.contains(event.target)) {
        loginModal.classList.remove('show');
    }
});

// Navbar Scroll Animation
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
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
