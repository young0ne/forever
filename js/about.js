$(document).ready(function(){


    var $main = $('.my-pic');
    var $resume = $('#resume-btn')

    TweenMax.set($main, {css:{x:-50, autoAlpha:0}});

    TweenMax.to($main, 0.9, {css:{x:0, autoAlpha:1}, delay:0.1, ease: Circ.easeOut})


});