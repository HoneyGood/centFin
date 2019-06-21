$(document).ready(function(){
    //Code here

//slideDown
    $(".m3-scroll-arr").click(function (e) {
        var destination = $("#post-11").offset().top;
        $('body, html').animate({scrollTop: destination}, 800);
        return false;
    })
});