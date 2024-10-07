$(function() {
    // 상설전시
    $('.sub_permanent .floorWrap li.on').find('.txt').stop().slideDown();

    $('.sub_permanent .floorWrap h5 button').on('click', function() {
        const el = $(this).closest('li');
        const idx = $(this).closest('li').index();
        const mapWrap = $('.sub_permanent .mapWrap [class*=floor_]');

        if(!el.hasClass('on')) {
            el.siblings().removeClass('on').find('.txt').stop().slideUp();
            el.addClass('on').find('.txt').stop().slideDown();

            mapAni(mapWrap, idx);

        }
    });


    // 특별전시
    if($('.viewCont').children().is('.special-grid')) {
        $('.special-grid').masonry({
            itemSelector: '.grid-item',
            gutter: 18
        });
    }
});

// 상설전시 지도 animate
function mapAni(ele, index) {
    const el = ele;
    const idx = index;
    const topVal = [0, 0, 0];
    const opVal = [0, 0, 0];

    if(idx == 0) {
        topVal[1] = '60px'; topVal[2] = '160px';
        opVal[0] = 1; opVal[1] = 0.3; opVal[2] = 0.3;
    }
    if(idx == 1) {
        topVal[0] = '-60px'; topVal[2] = '100px';
        opVal[1] = 1; opVal[2] = 0.3;
    }
    if(idx == 2) {
        topVal[0] = '-100px'; topVal[1] = '-60px';
        opVal[2] = 1;
    }

    el.eq(0).find('.img').stop().animate({top: topVal[0], opacity: opVal[0]}, function() { el.removeClass('on'); el.eq(idx).addClass('on') });
    el.eq(1).find('.img').stop().animate({top: topVal[1], opacity: opVal[1]});
    el.eq(2).find('.img').stop().animate({top: topVal[2], opacity: opVal[2]});
}


// 특별전시 스크롤 하단
function detectBottom() {
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();
        const innerHeight = $(window).innerHeight();
        const scrollHeight = $('body').prop('scrollHeight');
        if (scrollTop + innerHeight >= scrollHeight) {
            $('.sub_special').addClass('end');
            return true;
        } else {
            $('.sub_special').removeClass('end');
            return false;
        }
    });
}