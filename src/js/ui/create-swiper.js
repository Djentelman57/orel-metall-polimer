import Swiper from "swiper/bundle";

export default function createSwiper(newClass, slidesPerView, spaceBetween = 30){
    return new Swiper( newClass, {
        slidesPerView: slidesPerView,
        spaceBetween: 20,
        navigation: {
            nextEl: newClass + '-next',
            prevEl: newClass + '-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1366: {
                slidesPerView: slidesPerView
            },
        }
    });
}