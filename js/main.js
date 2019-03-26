(function ($) {

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 85) {
            $('.navbar').addClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('fixed-top');
            $('.sticky-logo').show();
            $('.main-branding').hide();
        } else {
            $('.navbar').removeClass('navcolor');
            $('.sticky-logo').hide();
            $('.main-branding').show();
        }
    });

})(jQuery);