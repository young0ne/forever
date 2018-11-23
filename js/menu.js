$(document).ready(function(){

    var $showNav = $('.menu-section');

    $(".menu-toggle").on('click', function() {
        
        $(this).toggleClass("on");
        $('.menu-section').toggleClass("on");
        $("nav ul").toggleClass('hidden');
        $(this).find('.one,.two,.three').toggleClass('change');

        TweenMax.set($showNav, {css:{autoAlpha:0}});
        TweenMax.to($showNav, 0.4, {css:{autoAlpha:1}, delay:0.1, ease: Circ.easeOut})

    });
    
});