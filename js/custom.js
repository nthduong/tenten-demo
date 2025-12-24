jQuery(document).ready(function () {
    const swiper = new Swiper(".hero-domain.swiper", {
        slidesPerView: 5,
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

console.log(1);
