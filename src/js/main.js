$(document).ready(function () {
    $().fancybox({
        selector: '.imglist a:visible'
    });
    //carusel,слайдер
    const slide = $('#house1,#house2,#house3,#house4,#house4');
    slide.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoHeight: false,
        number: false,
        margin: 50,
        response: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    const floor1 = $('#floor1-1');
    floor1.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });

    $('.customPrev1').click(function () {
            floor1.trigger('prev.owl.carousel');

    });
    $('.customNext1').click(function () {
        floor1.trigger('next.owl.carousel');
    });

    const floor12 = $('#floor1-2');
    floor12.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });

    $('.customPrev12').click(function () {
        floor12.trigger('prev.owl.carousel');

    });
    $('.customNext12').click(function () {
        floor12.trigger('next.owl.carousel');
    });

    const floor13 = $('#floor1-3');
    floor13.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });
    $('.customPrev13').click(function () {
        floor13.trigger('prev.owl.carousel');

    });
    $('.customNext13').click(function () {
        floor13.trigger('next.owl.carousel');
    });

    const floor21 = $('#floor2-1');
    floor21.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });

    $('.customPrev21').click(function () {
        floor21.trigger('prev.owl.carousel');

    });
    $('.customNext21').click(function () {
        floor21.trigger('next.owl.carousel');
    });

    const floor22 = $('#floor2-2');
    floor22.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });
    $('.customPrev22').click(function () {
        floor22.trigger('prev.owl.carousel');

    });
    $('.customNext22').click(function () {
        floor22.trigger('next.owl.carousel');
    });
    const floor31 = $('#floor3-1');
    floor31.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });
    $('.customPrev31').click(function () {
        floor31.trigger('prev.owl.carousel');

    });
    $('.customNext31').click(function () {
        floor31.trigger('next.owl.carousel');
    });
    const floor32 = $('#floor3-2');
    floor32.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
        number: false,
        margin: 50,

    });
    $('.customPrev32').click(function () {
        floor32.trigger('prev.owl.carousel');

    });
    $('.customNext32').click(function () {
        floor32.trigger('next.owl.carousel');
    });
    $('div.slide-tabs').on('click', 'div:not(.slide-tabs-box__btn_active)', function() {
        console.log('test');
        $(this)
            .addClass('slide-tabs-box__btn_active').siblings().removeClass('slide-tabs-box__btn_active')
            .closest('div.container').find('div.slide-content')
            .removeClass('active').eq($(this).index()).addClass('active');
    });

    $(window).scroll(function () {
        if($(this).scrollTop() > 500){
            $('.up-arrow').fadeIn()
        } else{
            $('.up-arrow').fadeOut();
        }
    });
    $('.popup__close,.consult').on('click',function () {
        $('.overlay, .popup, .consult, .thanks, .buy-form').fadeOut('slow')
    });
    $('.getInformation-form__btn').each(function (i) {
        $(this).on('click',function () {
            $('.getInformation-form').text($('.thanks__title').eq(i).text());
            $('.overlay, .popup, .buy-form').fadeIn('slow');
        })
    })
});
