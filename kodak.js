$(document).ready(function(){
    
    $(".hamburger").click(function(){
        $(".side_menu").stop().fadeIn();
        $(".close").stop().fadeIn();
    });
    $(".close").click(function(){
        $(".side_menu").stop().fadeOut();
        $(".close").stop().fadeOut();
    });
});