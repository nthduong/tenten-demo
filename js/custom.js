jQuery(document).ready(function () {
    const swiper = new Swiper(".hero-domain__inner.swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 3.1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 3.1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
});
