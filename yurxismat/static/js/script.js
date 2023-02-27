$(document).ready(function () {
    "use strict";

    $(".loader").delay(600).fadeOut("slow");

    //navbar add remove calss
    var header = $(".no-background");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('no-background').addClass("navbar-bg");
        } else {
            header.removeClass("navbar-bg").addClass('no-background');
        }
    });

    //multi dropdown
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu .show').removeClass("show");
        });

        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        return false;
    });

    //Sticky sidebar
    $('.leftSidebar, .content, .rightSidebar')
        .theiaStickySidebar({
            additionalMarginTop: 111
        });

    $('.faqLeftSidebar, .faqContent').theiaStickySidebar();

    //Navbar top search
    $(".navbar").each(function () {
        $("li.search > a", this).on("click", function (e) {
            e.preventDefault();
            $(".top-search").slideToggle();
        });
    });

    $(".input-group-addon.close-search").on("click", function () {
        $(".top-search").slideUp();
    });

    //Sidebar
    $('.overlay').on('click', function () {
        $('#sidebar, .page-content').toggleClass('active');
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, .page-content').toggleClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 10)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    //Back to top
    $('body').append('<div id="toTop" class="btn-top"><i class="ti-upload"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    //Video popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //testimonial
    $('.owl-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".document-navigation").on("click", "a", function (e) {
        e.preventDefault();

        let href = $(this).attr('href');

        href = href.replace("#", "");

        $(".document-navigation a").removeClass("active");

        $(this).addClass("active");

        if (href === 'tab1') {
            $(".document-form-tabs #" + href + " input:radio:visible:first").focus();
        } else {
            $(".document-form-tabs #" + href + " input:text:visible:first").focus();
        }
    });

    $("#tool-left").on("click", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(".document-sidebar").toggleClass("document-hidden");
    });

    $("#tool-right").on("click", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(".document-view").toggleClass("document-view-hidden");
    });

    $(".sidebarMenu").metisMenu();

    $(".btn-egov").on("click", function (e) {
        e.preventDefault();
        window.location.href = 'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=LegalTech&redirect_uri=https://yurxizmat.uz/uz/egov&scope=LegalTech&state=testState';
    });

});
$(window).scroll(function () {
    let scrollDistance = $(window).scrollTop();
    $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $(".navigation a.active").removeClass("active");
            $(".navigation a")
                .eq(i)
                .addClass("active");
        }
    });

    let scrollDocuments = $(window).scrollTop();
    $(".document-tab2").each(function (i) {
        if ($(this).position().top <= scrollDocuments) {
            $(".document-navigation a.active").removeClass("active");
            $(".document-navigation a")
                .eq(i)
                .addClass("active");
        }
    });


}).scroll();

function testValue(){
    console.log("testValue");
    $(".document-form-tabs .form-control").each(function () {
        $(this).val("1")
    });
}
