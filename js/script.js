var $gallery = document.getElementById('gallery');
var $view = $gallery.querySelector('.view');
var $viewContainer = $view.querySelector('.view-container');
var $viewItem = $viewContainer.querySelectorAll('.view-item');
var $list = $gallery.querySelector('.list');
var $listItem = $list.querySelectorAll('a');


//갤러리의 width 값.
var _galleryW = 800;
var _cuId = 0;
var _exId = 0;
//전체 이미지의 개수.
var _max = $viewItem.length;
//갤러리 리사이즈.
function galleryResize(){
    //.view-container 800 * 4 = 3200 px
    $viewContainer.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < $viewItem.length; i++){
        //.view-item 800 px
        $viewItem[i].style.width = _galleryW + 'px';
    }
}

/*
css.
transform :  translate3d(0,0,0); // 공통
-webkit-transform : ---- // 크롬 사파리
-moz-transform : ---- // 파이어폭스
-o-transform : ---- // 오페라
-ms-transform : ---- // 익스플로러

*/


function gallerySlide(){
    // 현재 _cuId = 0. 800 * 0 = 0. 0 * -1 = 0.
    // 현재 _cuId = 1. 800 * 1 = 800. 800 * -1 = -800. 
    // 현재 _cuId = 2. 800 * 2 = 1600. 800 * -1 = -1600. 
    // 현재 _cuId = 3. 800 * 3 = 24000. 800 * -1 = -2400. 

    // _cuId = 1.
    // _exId = 0.
    // _cuId - _exId = 1.
    // Math.abs(_cuId - _exId) - 1.

    // _cuId = 0.
    // _exId = 3.
    // _cuId - _exId = -3.
    // Math.abs(_cuId - _exId) = 3.
    // Math.abs(_cuId - _exId) - 3.
    // 각 리스트의 격차에 따른 속도 분배.

    var duration = 350 + 150 * Math.abs(_cuId - _exId);
    console.log(duration);

    // $viewContainer.style.trasform = _galleryW * _cuId * -1 + 'px';
    // $viewContainer.style.transitionProperty = 'left';     // 움직일 스타일 속성.
    $viewContainer.style.transform = 'translate3d('+ _galleryW * _cuId * -1 + 'px,0,0)';  
    $viewContainer.style.transitionProperty = 'transform';  // 움직일 스타일 속성.
    $viewContainer.style.transitionDuration = 400 + 'ms';   // 속도
    $viewContainer.style.transitionTimeFunction = 'ease-in-out';
    // 'cubic-bezier(0.45, 0.03, 0.515, 0.955)'; // quad ease in out. 이라고..함다..속도를 구체적으로 정할 수 있슴돠(_ _;;)

}

$viewContainer.addEventListener("transtioned", function(){
    $viewContainer.style.transitionProperty = null;
    $viewContainer.style.transitionDuration = null;
    $viewContainer.style.transitionTimeFunction = null;
});


 function listClick(id){
     function onClickList(event){
         event.preventDefault();
         var $el = this, $parent = $el.parentElement;
         if(!$parent.classList.contains('selected')){
             _cuId = id;
             $listItem[_exId].parentElement.classList.remove('selected');
             $parent.classList.add('selected');
             ///////
             gallerySlide();
             ///////
             _exId = _cuId;
         }
     }
     $listItem[id].addEventListener('click', onClickList);
 }



//초기화.
function init(){
    // console.log('초기화');
    galleryResize();
    for(var i = 0; i < $listItem.length; i++){
         listClick(i);
    }
}

init();