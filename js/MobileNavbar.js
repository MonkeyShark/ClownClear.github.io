const menuToggle = document.querySelector('.menu-toggle');
    const navUL = document.querySelector('nav ul');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', toggleNavbarMenu);

    function toggleNavbarMenu() {
        navUL.classList.toggle('show');
        document.querySelector('header').classList.toggle('menu-open');

        if (nav.classList.contains('flex-column')) {
            nav.classList.remove('flex-column');
        } else {
            nav.classList.add('flex-column');
        }
    }