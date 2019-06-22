$(document).ready(function(){
    //Code here

//slideDown
    $(".m3-scroll-arr").click(function (e) {
        e.preventDefault();
        var destination = $("#post-11").offset().top;
        $('body, html').animate({scrollTop: destination}, 1000);
        return false;
    })
});