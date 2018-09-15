function slide() {

    var prev = document.querySelector('.prevBtn');
    var next = document.querySelector('.nextBtn');
    var bannerItem = document.querySelectorAll('.banner-item');
    var slide = 0;

    function showSlide() {
        bannerItem[slide].classList.add('active');
    };

    function hideSlide() {
        bannerItem[slide].classList.remove('active');
    };

    // function hideSlide() {
    //     bannerItem[slide].classList.toggle('show');
    //     setTimeout(function () {
    //         bannerItem[slide].classList.toggle('active');
    //     }, 1000);
    // };



    showSlide();

    function nextSlide() {
        hideSlide();
        if (slide == (bannerItem.length - 1)) {
            slide = 0;
        } else {
            slide++;
        }
        showSlide();
    }

    function prevSlide() {
        hideSlide();
        if (slide == 0) {
            slide = (bannerItem.length - 1);
        } else {
            slide--;
        }
        showSlide();
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
        if (window.scrollY > (main.offsetTop - topBar.clientHeight)) {
            topBar.classList.add('scroll');
        } else {
            topBar.classList.remove('scroll');
        }
    })
}

slide();
menu();
topBarScroll();