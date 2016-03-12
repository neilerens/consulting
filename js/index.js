$(document).ready(function(){
    $('.team-photo').hover(function(){
        $(this).toggleClass('active');
    });
    $('.more_info').click(function() {
//        $('.more_info').removeClass('active')
        $(this).toggleClass('active');
    });
});
