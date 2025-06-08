import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});


try {
    // init Swiper:
    new Swiper('.works__slider', {

        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            1920: {

                spaceBetween: 35
            }
        },
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
    });

}
catch (e) { }





