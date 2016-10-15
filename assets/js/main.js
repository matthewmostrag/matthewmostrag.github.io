$(document).ready(function() {

    // Fullpage
    $('#fullpage').fullpage({
        anchors: ['presentation', 'coupeFranceIUT', 'merProvence', 'neoma', 'horrorStoryNight', 'contact']
    });

    $('#sectionOne .btn').click(function(){
        $.fn.fullpage.moveSectionDown();
    });

    $('.section-nav .icon-arrow-up').click(function(){
        $.fn.fullpage.moveSectionUp();
    });

    $('.section-nav .icon-arrow-down').click(function(){
        $.fn.fullpage.moveSectionDown();
    });

    // Menu
    $('#toggle-menu').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('#menu-icon').toggleClass('open');
    });

    $('.menu li a').click(function(){
        if( $('.menu').hasClass('active') ) {
            $('#toggle-menu').toggleClass('active');
            $('.menu').toggleClass('active');
            $('#menu-icon').toggleClass('open');
        }
    });

});
