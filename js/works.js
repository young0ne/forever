$(document).ready(function(e){

    var $section, $blueLine, $title, $txt, $dotNav, $viewBtn;

    var _cuid, _exid;

    // Layout
    var layout = function() {
        $section = $('section');
        $dotNav = $('.dot-nav');
        $dotNavEl = $dotNav.find('span');
        $viewBtn = $section.find('.view-btn');
    }

    // Reset
    var reset = function() {
        _itemMax = $section.length;
    }

    var init = function() {
        layout();
        reset();
        addEvent();
    }

    // Event Bind
    var addEvent = function() {
        $dotNavEl.on('click.dot.nav', onClickDotNav);
        // $dotNavEl.on('click.dot.nav', sectionChange);
    }

    // Dot Nav Click
    var onClickDotNav = function(e) {
        e.preventDefault();

        var id = $dotNavEl.index(this);

        TweenMax.set($('.works-txt'), {css:{autoAlpha:0}});
        TweenMax.to($('.works-txt'), 0.6, {css:{autoAlpha:1}, delay: 0.1,  ease: Sine.easeInOut})
        
        console.log('dot = ' + id);
        
        $dotNavEl.removeClass('selected');
        $dotNavEl.eq(id).addClass('selected');

        if(id === 0){
            $('section:eq(0)').addClass('on');
        }else{
            $('section:eq(0)').removeClass('on');
        }
        
        if(id === 1){
            $('section:eq(1)').addClass('on');
        }else{
            $('section:eq(1)').removeClass('on');
        }
        
        if(id === 2){
            $('section:eq(2)').addClass('on');
        }else{
            $('section:eq(2)').removeClass('on');
        }

        console.log($dotNavEl.eq(id));
    }

    // Click View Btn

    TweenMax.set($('.frame-wrap'), {css:{x:3000, autoAlpha:0}});

    $('section a').click(function(){
        $('#iframe').attr('src',$(this).attr('data-url'));
        TweenMax.to($('.frame-wrap'), 0.8, {css:{x:0, autoAlpha:1}, ease: Power3.easeOut})
    });

    $('.frame-wrap a').click(function(){
        TweenMax.to($('.frame-wrap'), 0.8, {css:{x:3000}, ease: Power3.easeInOut})
    });
  
    init();     

});