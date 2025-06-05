const body = document.querySelector('body');
const toggleButton = document.querySelector('.toggle-button');

//Handle Switch Function
const handleSwitchMode = () => {
    body.classList.toggle("dark")
    // Update localStorage based on the current mode
    if(body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        toggleButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    }else {
        localStorage.setItem("mode", "default");
        toggleButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    }
}
// Add event listener to the toggle button
toggleButton.addEventListener('click', handleSwitchMode);

// Set initial mode based on localStorage
window.addEventListener("DOMContentLoaded", (_) => {
    body.classList.add(localStorage.getItem("mode"));
    toggleButton.innerHTML = localStorage.getItem("mode") === "dark" ? '<ion-icon name="sunny-outline"></ion-icon>' : '<ion-icon name="moon-outline"></ion-icon>'
})

const menu = document.querySelector('.menu');
const navigationBar = document.querySelector('.navigation-bar');
// Open menu visibility
const toggleMenu = () => {
    navigationBar.classList.toggle('active');
}
// Add event listener to the menu button
menu.addEventListener('click', toggleMenu);

// Close Menu Visibility
const closeBtn = document.querySelector(".close")
const closeMenu = () => {
    navigationBar.classList.remove('active');
}
// Add event listener to the close button
closeBtn.addEventListener("click", closeMenu);

// Show the header when scrolling up    
const header = document.querySelector('header');
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
});