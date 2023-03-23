import Swiper, {Navigation, Pagination, Thumbs, Grid, Scrollbar} from "swiper";

new Swiper(".technologies-swiper", {
    modules: [Pagination, Navigation, Grid],
    slidesPerView: 1,
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

new Swiper(".about-purpose-swiper", {
    modules: [Pagination, Navigation, Grid],
    slidesPerView: 1,
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

new Swiper(".services-swiper", {
    modules: [Pagination, Navigation, Grid],
    slidesPerView: 1,
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

const swiper = new Swiper(".about-advantages-swiper", {
    modules: [Pagination, Navigation, Grid, Scrollbar],
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 71,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 0,
        }
    }
});
const paginationRenderer = (swiper) => {
    swiper
        .el
        .querySelector('.pagination-top').innerHTML = `${swiper.activeIndex + 1} / ${swiper.slides.length}`;
};
new Swiper(".super-swiper", {
    modules: [Pagination, Grid],
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init() {
            paginationRenderer(this);
        },
        slideChange() {
            paginationRenderer(this);
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});