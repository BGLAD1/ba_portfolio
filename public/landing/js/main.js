(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});





    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    
   /* Masonry
    * ---------------------------------------------------- */ 
   var ssMasonryFolio = function () {
        
    var containerBricks = $('.masonry');

    containerBricks.imagesLoaded(function () {
        containerBricks.masonry({
            itemSelector: '.masonry__brick',
            resize: true
        });
    });

};


/* photoswipe
* ----------------------------------------------------- */
var ssPhotoswipe = function() {
    var items = [],
        $pswp = $('.pswp')[0],
        $folioItems = $('.item-folio');

    // get items
    $folioItems.each( function(i) {

        var $folio = $(this),
            $thumbLink =  $folio.find('.thumb-link'),
            $title = $folio.find('.item-folio__title'),
            $caption = $folio.find('.item-folio__caption'),
            $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
            $captionText = $.trim($caption.html()),
            $href = $thumbLink.attr('href'),
            $size = $thumbLink.data('size').split('x'),
            $width  = $size[0],
            $height = $size[1];
    
        var item = {
            src  : $href,
            w    : $width,
            h    : $height
        }

        if ($caption.length > 0) {
            item.title = $.trim($titleText + $captionText);
        }

        items.push(item);
    });

    // bind click event
    $folioItems.each(function(i) {

        $(this).find('.thumb-link').on('click', function(e) {
            e.preventDefault();
            var options = {
                index: i,
                showHideOpacity: true
            }

            // initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });

    });
};


/* slick slider
* ------------------------------------------------------ */
var ssSlickSlider = function() {
    
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        fade: true,
        cssEase: 'linear'
    });
};


/* Smooth Scrolling
* ------------------------------------------------------ */
var ssSmoothScroll = function() {
    
    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);
        
            e.preventDefault();
            e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};


/* Alert Boxes
* ------------------------------------------------------ */
var ssAlertBoxes = function() {

    $('.alert-box').on('click', '.alert-box__close', function() {
        $(this).parent().fadeOut(500);
    }); 

};


/* Animate On Scroll
* ------------------------------------------------------ */
var ssAOS = function() {
    
    AOS.init( {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });

};


/* Initialize
* ------------------------------------------------------ */
(function clInit() {

    ssPreloader();
    ssMenuOnScrolldown();
    ssMobileMenu();
    ssWaypoints();
    ssMasonryFolio();
    ssPhotoswipe();
    ssSlickSlider();
    ssSmoothScroll();
    ssAlertBoxes();
    ssAOS();

})();

})(jQuery);

    


