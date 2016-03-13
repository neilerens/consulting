$(document).ready(function(){
    $('.team-photo').hover(function(){
        $(this).toggleClass('active');
    });
    $('.more_info').click(function() {
//        $('.more_info').removeClass('active')
        $(this).toggleClass('active');
    });
    $("#scrollDown").click(function() {
        $('html, body').animate({
        scrollTop: $("#bios").offset().top
    -50}, 2000);
    });
    $("#customBtn").click(function() {
        $('html, body').animate({
        scrollTop: $("#bios").offset().top
    -50}, 2000);
    });
});
