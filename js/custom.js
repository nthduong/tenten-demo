jQuery(document).ready(function () {
    jQuery(document).on("click", ".hero-search .hero-search__switch-item", function () {
        jQuery(".hero-search .hero-search__switch-item").removeClass("current");
        jQuery(this).addClass("current");
        jQuery(this).closest(".hero-search__inner").find(".hero-search__input-wrap").removeClass("active");
    });
    jQuery(document).on("click", ".hero-search .hero-search__switch-item.search-domain", function () {
        jQuery(this).closest(".hero-search__inner").find(".hero-search__input-wrap").removeClass("active");
        jQuery(this)
            .closest(".hero-search__inner")
            .find(".hero-search__input-wrap.hero-search__domain")
            .addClass("active");
    });
    jQuery(document).on("click", ".hero-search .hero-search__switch-item.search-domains", function () {
        jQuery(this).closest(".hero-search__inner").find(".hero-search__input-wrap").removeClass("active");
        jQuery(this)
            .closest(".hero-search__inner")
            .find(".hero-search__input-wrap.hero-search__domains")
            .addClass("active");
    });

    jQuery(document).on("click", ".hero-search .aimode-domain", function () {
        jQuery(this).closest(".hero-search__inner").find(".hero-search__ai-mode").removeClass("active");
        jQuery(this)
            .closest(".hero-search__inner")
            .find(".hero-search__domain .hero-search__ai-mode")
            .addClass("active");
    });
    jQuery(document).on("click", ".hero-search .aimode-domains", function () {
        jQuery(this).closest(".hero-search__inner").find(".hero-search__ai-mode").removeClass("active");
        jQuery(this)
            .closest(".hero-search__inner")
            .find(".hero-search__domains .hero-search__ai-mode")
            .addClass("active");
    });

    function bindWhyChooseEvents() {
        $(".why-choose-item").off("mouseenter click");

        if ($(window).width() > 992) {
            $(".why-choose-item").on("mouseenter", function () {
                $(".why-choose-item").removeClass("current");
                $(this).addClass("current");
            });
        } else {
            $(".why-choose-item").on("click", function () {
                $(".why-choose-item").removeClass("current");
                $(this).addClass("current");
            });
        }
    }
    bindWhyChooseEvents();

    function checkMobileWhyChoose() {
        if ($(window).width() <= 992) {
            $(".why-choose-item").addClass("current");
        } else {
            $(".why-choose-item").removeClass("current");
        }
    }
    checkMobileWhyChoose();

    //swiper
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
                slidesPerView: 3,
                spaceBetween: 10,
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
    const swiper2 = new Swiper(".service__general.swiper", {
        slidesPerView: 5,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        breakpoints: {
            320: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },

            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    let swiper3 = null;

    function handleSwiper() {
        const $general = $(".why-choose__general");
        const $list = $(".why-choose__list");
        const $item = $(".why-choose-item");
        const isMobile = $(window).width() < 992;

        if (isMobile && !swiper3) {
            // Add class swiper
            $general.addClass("swiper");
            $list.addClass("swiper-wrapper");
            $item.addClass("swiper-slide");

            // Init Swiper
            swiper3 = new Swiper(".why-choose__general.swiper", {
                slidesPerView: 1,
                spaceBetween: 12,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: ".why-choose__general .swiper-pagination",
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                },
            });
        }

        if (!isMobile && swiper3) {
            swiper3.destroy(true, true);
            swiper3 = null;

            $general.removeClass("swiper");
            $list.removeClass("swiper-wrapper");
            $item.removeClass("swiper-slide");
        }
    }

    handleSwiper();

    $(window).on("resize", function () {
        handleSwiper();
        checkMobileWhyChoose();
        bindWhyChooseEvents();
    });
});
