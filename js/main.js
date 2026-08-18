document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    const closeMenu = () => {
        if (!navLinks || !mobileMenuBtn) return;
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '&#9776;';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    };

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        });
    }

    navItems.forEach((link) => {
        link.addEventListener('click', () => closeMenu());
    });

    const sectionIds = ['home', 'problem', 'how', 'about', 'providers', 'download'];
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    if (sections.length && navItems.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    navItems.forEach((link) => {
                        const href = link.getAttribute('href') || '';
                        link.classList.toggle('active', href.endsWith(`#${entry.target.id}`));
                    });
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
        );
        sections.forEach((section) => observer.observe(section));
    }
});
