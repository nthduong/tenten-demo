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
                // mobile nhỏ
                slidesPerView: 3,
                spaceBetween: 10,
            },
            576: {
                // mobile lớn
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                // tablet
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                // laptop
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                // desktop lớn
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
});
