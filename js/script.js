$(document).ready(function(){
	$('.carousel__inner').slick({
		prevArrow: '<button type="button" class="slick-prev"> <img src="img/slider/prev slide.jpeg"> </button>',
		nextArrow:  '<button type="button" class="slick-next"> <img src="img/slider/next slide.jpeg"> </button>',
		speed: 300,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: true,
					slidesToShow: 1
				}
			},
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 2
			// 	}
			// }
		]	
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });    
    $('[data-modal=thanks]').on('click', function(){
    $(' #consultation, #order').fadeOut('slow');
    $(' #thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.catalog-item__btn').each(function(i){
        $(this).on('click', function() {
            $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
    $('#consultation-form').validate({
        rules: {
            name: "required",
            number: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста введите свое имя",
            number: "Пожалуйста введите свой номер",
            email: "Пожалуйста введите свою почту"
            },
    });
    $('#consultation form').validate({
        rules: {
            name: "required",
            number: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста введите свое имя",
            number: "Пожалуйста введите свой номер",
            email: "Пожалуйста введите свою почту"
            },
    });
    // $('#order form').validate();
    $('#order form').validate({
        rules: {
            name: "required",
            number: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста введите свое имя",
            number: "Пожалуйста введите свой номер",
            email: "Пожалуйста введите свою почту"
            },
    });

    // smooth scroll

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // wow.js

    new WOW().init();
});
    
    	