function slide() {

    var prev = document.querySelector('.prevBtn');
    var next = document.querySelector('.nextBtn');
    var slide = 1;

    document.querySelector('.banner-item:nth-child(' + slide + ')').classList.add('active');

    function prevSlide() {
        document.querySelector('.banner-item:nth-child(' + slide + ')').classList.remove('active');
        switch (slide) {
            case 1:
                slide = 3;
                break;
            case 2:
                slide = 1;
                break;
            case 3:
                slide = 2;
                break;
        }
        document.querySelector('.banner-item:nth-child(' + slide + ')').classList.add('active');
    }

    function nextSlide() {
        document.querySelector('.banner-item:nth-child(' + slide + ')').classList.remove('active');
        switch (slide) {
            case 1:
                slide = 2;
                break;
            case 2:
                slide = 3;
                break;
            case 3:
                slide = 1;
                break;
        }
        document.querySelector('.banner-item:nth-child(' + slide + ')').classList.add('active');
    }

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
}

function menu() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');
    var wrapper = document.querySelector('.wrapper');

    function toggleMenu() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        wrapper.classList.toggle('menuOn');
    }

    hamburger.addEventListener('click', toggleMenu);
}

function topBarScroll() {
    var topBar = document.querySelector(".top-bar");
    var main = document.querySelector("main");
    window.addEventListener('scroll', function () {
        if (window.scrollY > main.offsetTop) {
            topBar.classList.add('scroll');
        } else {
            topBar.classList.remove('scroll');
        }
    })
}

slide();
menu();
topBarScroll();