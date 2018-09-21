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
        document.querySelector(".services"),
        document.querySelector(".why-best"),
        document.querySelector(".testimonials"),
        document.querySelector(".contact")
    ];

    var counterSection = document.querySelector(".counter");

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

    function liveCounter() {
        var counters = document.querySelectorAll(".counter div p:first-child");

        function countTo(element) {
            var startValue = parseInt(element.getAttribute("data-start"));
            var endValue = parseInt(element.getAttribute("data-end"));
            var value = startValue;

            var count = setInterval(function () {
                if ((value + 10000) < endValue) {
                    value += 10000;
                    element.textContent = value;
                } else if ((value + 1000) < endValue) {
                    value += 1000;
                    element.textContent = value;
                } else if ((value + 100) < endValue) {
                    value += 10;
                    element.textContent = value;
                } else if (value < endValue) {
                    value++;
                    element.textContent = value;
                } else {
                    clearInterval(count);
                }

                if (value >= 1000000) {
                    element.textContent = Math.round(parseFloat(value / 1000000) * 100) / 100 + "M";
                }

            }, 10);
        }

        if ((window.scrollY + window.innerHeight) > (counterSection.offsetTop + counterSection.offsetHeight)) {
            if (counterSection.classList.contains("hidden")) {
                counters.forEach(function (counter) {
                    countTo(counter);
                });
                counterSection.classList.remove("hidden");
            }
        }

        if (window.scrollY < 10) {
            counters.forEach(function (counter) {
                counter.textContent = counter.getAttribute("data-start");
            });
            counterSection.classList.add("hidden");
        }


    }

    window.addEventListener("scroll", activate);
    window.addEventListener("scroll", liveCounter);
}

function goTopArrow() {
    var header = document.querySelector("header");
    var arrow = document.querySelector(".goTop");

    arrow.classList.add("hidden");

    function showArrow() {
        if ((window.scrollY + window.innerHeight) > (2 * header.offsetHeight)) {
            arrow.classList.remove("hidden");
        } else {
            arrow.classList.add("hidden");
        }
    }

    arrow.addEventListener("click", function () {
        var loop = setInterval(function () {
            if (window.scrollY > 0) {
                window.scrollTo(0, (window.scrollY - 20));
            } else {
                clearInterval(loop);
            }
        }, 1);
    })

    window.addEventListener("scroll", showArrow);
}

slide();
menu();
topBarScroll();
windowScroll();
goTopArrow();