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

function windowScroll() {
    var elements = [
        document.querySelector(".about article:nth-child(1)"),
        document.querySelector(".about article:nth-child(2)"),
        document.querySelector(".services")
    ];

    function activate() {
        if (window.scrollY < 10) {
            elements.forEach(function (element) {
                element.classList.add("hidden");
            });
        } else {
            elements.forEach(function (element) {
                if ((window.scrollY + window.innerHeight) > (element.offsetTop + element.offsetHeight / 2)) {
                    element.classList.remove("hidden");
                }
            });
        }
    }

    window.addEventListener("scroll", activate);
}

slide();
menu();
topBarScroll();
windowScroll();