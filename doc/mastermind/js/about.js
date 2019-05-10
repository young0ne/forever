$(document).ready(function(){

    var $top = $('.txt-top');
    var $middle = $('.txt-middle');
    var $bottom = $('.txt-bottom');

    TweenMax.set($top, {css:{y:40, autoAlpha:0}});
    TweenMax.set($middle, {css:{y:40, autoAlpha:0}});
    TweenMax.set($bottom, {css:{y:40, autoAlpha:0}});

    TweenMax.to($top, 0.8, {css:{y:0, autoAlpha:1}, delay:0.2, ease:Circ.easeOut})
    TweenMax.to($middle, 0.8, {css:{y:0, autoAlpha:1}, delay:0.4, ease:Circ.easeOut})
    TweenMax.to($bottom, 0.8, {css:{y:0, autoAlpha:1}, delay:0.6, ease:Circ.easeOut})

});

