import Swiper, {Navigation, Pagination, Thumbs, Grid} from "swiper";

new Swiper(".technologies-swiper", {
    modules: [Pagination, Navigation, Grid],
    slidesPerView: 1,
    spaceBetween: 22,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

if (document.querySelector('.reviewsSlider') != null) {
    const reviewsSlider = new Swiper(".reviewsSlider", {
        modules: [Grid, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 25,
        autoHeight: true,
        grabCursor: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 25,
                autoHeight: false,
                grid: {
                    rows: 2,
                },
            },

            1200: {
                slidesPerView: 3,
                //slidesPerView: 'auto',
                spaceBetween: 25,
                autoHeight: false,
                grid: {
                    rows: 2,
                },
            }
        },
        pagination: {
            el: ".main-reviews__swiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.main-reviews__swiper .swiper-button-next-unique',
            prevEl: '.main-reviews__swiper .swiper-button-prev-unique',
        },
    });

    // reviewsSlider large text modal opens
    let slidesContainer = document.querySelector('.reviewsSlider .swiper-wrapper')
    let id = 0;

    function setIds(node) {
        node.childNodes.forEach(function (child) {
            if (child.nodeType === 1) {
                let reviewBlock = child.querySelector('.informational-block__text')

                reviewBlock.setAttribute("data-fancybox", "");
                reviewBlock.setAttribute("data-type", "clone");
                reviewBlock.setAttribute("id", "element-" + id);
                reviewBlock.setAttribute("data-src", "element-" + id);
                id++;
            }
        });
    }

    setIds(slidesContainer);
}

const swiper = new Swiper(".franchiseSlider", {
    modules: [Pagination, Navigation, Grid],
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",

    pagination: {
        el: ".about-franchise__swiper .swiper-pagination",
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: '.about-franchise__swiper .swiper-button-next-unique',
        prevEl: '.about-franchise__swiper .swiper-button-prev-unique',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});