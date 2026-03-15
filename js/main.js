document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon to 'X' (basic text version for simplicity)
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '&#10005;'; // X symbom
            } else {
                mobileMenuBtn.innerHTML = '&#9776;'; // Hamburger symbol
            }
        });
    }
});
