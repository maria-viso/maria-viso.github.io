import $ from 'jquery'

$(function(){
    var mq = window.matchMedia( "(min-width: 769px)" );
    // Parallax effect
    var parallax = function($object, time){
        time = time++;
        $(window).scroll(function(){
            var scrolling = $(window).scrollTop();
            var move = scrolling * time + 'px';
            $object.css({ 'margin-top' : move });
        });
    }
    //parallax($(".description"), -.20);
    if (mq.matches) {
        parallax($(".projects li:nth-child(2)"), .15);
        parallax($(".projects li:nth-child(7)"), -.25);
        parallax($(".projects li:nth-child(12)"), -.10);
        parallax($(".projects li:nth-child(15)"), .10);
    }
});
