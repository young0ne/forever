$(document).ready(function(){


    var $title = $('.title-txt p');
    var $icon = $('.icon img');
    var $connect = $('.connect');

    TweenMax.set($title, {css:{y:40, scale:0.98, autoAlpha:0}});
    TweenMax.set($icon, {css:{autoAlpha:0}});
    TweenMax.set($connect, {css:{y:25, autoAlpha:0}});

    TweenMax.to($('.line-top'), 0.6, {css:{'height': 70 + '%'}, ease: Power2.easeInOut,})
    TweenMax.to($('.line-btm'), 0.8, {css:{'width': 80 + 'vw'}, delay:0.2, ease: Power3.easeInOut, onComplete:function(){
        $.each($title, function(i, d){
            var $el = $(d);
            TweenMax.to($el, 0.3, {css:{y:0, scale:1.0, autoAlpha:1}, delay: 0.1 * i, ease: Sine.easeInOut});
            TweenMax.to($icon, 0.8, {css:{autoAlpha:1}, delay:0.1, ease: Expo.easeOut});
            TweenMax.to($connect, 0.3, {css:{y:0, autoAlpha:1}, delay:0.1, ease: Sine.easeInOut})

        });
    }})

    // txtAni.eventCallback('onComplete', iconAni);
    
    // var iconAni = TweenMax.to($icon, 0.8, {css:{autoAlpha:1}, delay:0.2, ease: Expo.easeOut});
    // TweenMax.to($connect, 0.8, {css:{y:0, autoAlpha:1}, delay:1, ease: Circ.easeOut})


    // var topLine = function(){
    //     $('.line-top').stop(true).animate({'height':'70%'}, 600, btmLine)
    // }

    // var btmLine = function(){
    //     $('.line-btm').stop(true).animate({'width':'80vw'}, 1000)
    // }

    // topLine();

});