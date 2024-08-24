$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 9,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        freeMode: true,
        breakpoints: {
            300: {
                slidesPerView: 2
            },
            550: {
                slidesPerView: 3.5
            },
            768: {
                slidesPerView: 6
            },
            950: {
                slidesPerView: 7
            },
            1199: {
                slidesPerView: 9
            }
        }
    });


    document.addEventListener('scroll', () => {
        let nowScroll = $(this).scrollTop();

        if (nowScroll > 20) {
            $('#fixed-con').addClass('active')
        } else {
            $('#fixed-con').removeClass('active')
        }
    })


    $('.compare-nav li a').click(function () {
        $('.compare-nav li a').removeClass('active')
        $(this).addClass('active')
    })

    $('.compare-nav li:first a').addClass('active')


    $('.inner-header-btm li a').click(function () {
        $('.inner-header-btm li a').removeClass('active')
        $(this).addClass('active')
    })

    $('.inner-header-btm li:first a').addClass('active')


    $('.fixed-conL>a').click(function () {
        if ($('.fixed-conL').hasClass('active')) {
            $('.fixed-conL').removeClass('active')
        } else {
            $('.fixed-conL').addClass('active')
        }
    })










































})