$(function(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    let ht = $(window).height();
    let moveTop = $(window).scrollTop();
    let sh = $('section').height();
    $(window).scroll(function (event) {
        didScroll = true;
    });
    
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
    $('.close').click(function () {
        $('.menu_screen').removeClass('on')
    })
    $('.gnb>.menu').click(function () {
        $('.menu_screen').addClass('on')
    });
    $('.gnb>p').click(function () {
        $('.menu_screen').addClass('on')
    })

    $('.main_menu_con>a').mouseenter(function () {
        $('.menu_img>img').css({
            opacity: '1'
        })
    })
    $('.main_menu_con>a').mouseout(function () {
        $('.menu_img>img').css({
            opacity: '0'
        })
    })

    $('.main_menu_con a').mouseover(function () {
        let style_name = $(this).attr('title')
        console.log(style_name)
        $('#menu_img').addClass(style_name)
    });
    $('.main_menu_con a').mouseout(function () {
        $('#menu_img').removeClass()
    });
    $(window).scroll(function(){
        if(moveTop<=sh){
            $('.sec4_left_top > div').addClass('on')
        }else{
            $('.sec4_left_top > div').removeClass('on')
        }
        if (event.detail) {
            delta = event.delta;
        } else {
            delta = event.wheelDelta;
        }
        if (delta < 0) {
            if ($(elmSelector).next() != undefined) {
                moveTop = $(elmSelector).next().offset().top;
            }

        } else {
            if ($(elmSelector).prev() != undefined) {
                moveTop = $(elmSelector).prev().offset().top;
            }
        }
    })
    console.log(moveTop)
    console.log(sh)


            
     
        
    
})
