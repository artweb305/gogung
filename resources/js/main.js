$(function() {
    $('main .contWrap li').on('mouseenter', function() {
        let idx = $(this).index() + 1;

        $('.main_bg').addClass(`img_0${idx}`).stop().fadeOut(0).fadeIn();

        $(this).addClass('on').find('.img img').stop().fadeOut(0).fadeIn();
    }).on('mouseleave', function() {
        let idx = $(this).index() + 1;

        $('.main_bg').removeClass(`img_0${idx}`).removeAttr('style');

        $(this).removeClass('on').find('.img img').stop().fadeOut(0).fadeIn();
    });
});