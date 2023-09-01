window.addEventListener('DOMContentLoaded', event => {

    // hide spinner
    const spinnerWrapperEl = document.querySelector(".spinner-wrapper");
    setTimeout(() => {
        spinnerWrapperEl.style.opacity = "0";
        setTimeout(() => {
            spinnerWrapperEl.style.display = "none";
        }, 500);
    }, 500);

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.077;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    AOS.init({
        offset: 200
    });

    let tl_hero = gsap.timeline();

    tl_hero.from(".navbar-brand", {
        duration: 0.50,
        x: -100,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    }).from("#navbarResponsive", {
        duration: 0.50,
        y: -100,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    }).from("#hero h1", {
        duration: 0.50,
        y: -100,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    }).from("#hero h2", {
        duration: 0.50,
        y: -100,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    }).from('#hero a', {
        duration: 0.40,
        y: 100,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    })

});