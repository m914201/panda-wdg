$(function () {
    let ht = $(window).height();
    let sh = $('section').height();
    let moveTop = $(window).scrollTop();
    let shT = $('.sec4').scrollTop
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('header').outerHeight();


    // console.log(moveTop)
    // console.log($(window).scrollTop())
    // console.log(sH)
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

    // 스크롤
    let elm = 'section';
    $(elm).each(function (index) {
        $(this).on('mousewheel DOMMouseScroll', function (e) {
            let E = e.originalEvent;
            // console.log(E)
            e.preventDefault();
            let elmSelector = $(elm).eq(index);
            // console.log(elmSelector);
            delta = 0;
            // console.log(ht)

            if (event.detail) {
                delta = event.delta;
            } else {
                delta = event.wheelDelta;
            }
            if (delta < 0) {
                if ($(elmSelector).next().length !== 0) {
                    moveTop = $(elmSelector).next().offset().top;
                }

            } else {
                if ($(elmSelector).prev() != undefined) {
                    moveTop = $(elmSelector).prev().offset().top;
                }
            }
            $('html , body').stop().animate({
                scrollTop: moveTop + 'px'
            }, 800)
            // SECTION2 text scroll event

            if (moveTop >= ht) {
                $('.sec2_text_con').css({
                    'bottom': '15%',
                    'opacity': '1'
                })
            }
            if (moveTop >= sh * 2) {
                $('.menu_text').css({
                    'color': 'black'
                })
                $('.menu').addClass('on')
            } else {
                $('.menu_text').css({
                    'color': 'white'
                })
                $('.menu').removeClass('on')
            }

            if (moveTop >= sh * 3) {
                $('.sec4_left_top > div').addClass('on')
            } else {
                $('.sec4_left_top > div').removeClass('on')
            }
        })
    })

    // SECTION1 text envt
    if (moveTop >= 0) {
        $('.sec1_text_con').css({
            'bottom': '15%',
            'opacity': '1'
        })


    }
    // 스크롤 발생시 헤더영역 이벤트
    $(function () {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
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
    })

    let wd = $('.slide_con').width();
    let wd2 = $('.prd_con > li').width();

    // console.log(wd)
    $('.color1_1').click(function () {
        $('.prd_con').animate({
            'left': wd2
        })
        $('.prd_img').removeClass('on')
        $('.prd_img1_1').addClass('on')

    });
    $('.color1_2').click(function () {
        $('.prd_con').animate({
            'left': 0
        })
        $('.prd_img').removeClass('on')
        $('.prd_img1_2').addClass('on')
    });
    $('.color1_3').click(function () {
        $('.prd_con').animate({
            'left': -wd2
        })
        $('.prd_img').removeClass('on')
        $('.prd_img1_3').addClass('on')
    });
    $('.color1_4').click(function () {
        $('.prd_con').animate({
            'left': -wd2 * 2
        })
        $('.prd_img').removeClass('on')
        $('.prd_img1_4').addClass('on')
    });
    $('.rento_btn').click(function () {
        $('.drag-img').removeClass('on')
        $('.list_con li img').removeClass('on')
        $('.slide_con').removeClass('on')
        $('.color_con').removeClass('on')
        $('.list_con li span').removeClass('on')
        $('.rento').addClass('on')
        $('.slide_con1').addClass('on')
        $('.color_con1').addClass('on')
        $(this).addClass('on')
        $('.ren').addClass('on')
    })
    $('.elic_btn').click(function () {
        $('.drag-img').removeClass('on')
        $('.slide_con').removeClass('on')
        $('.color_con').removeClass('on')
        $('.list_con li img').removeClass('on')
        $('.list_con li span').removeClass('on')
        $('.elic').addClass('on')
        $('.slide_con2').addClass('on')
        $('.color_con2').addClass('on')
        $(this).addClass('on')
        $('.elc').addClass('on')
    })
    $('.bibo_btn').click(function () {
        $('.drag-img').removeClass('on')
        $('.slide_con').removeClass('on')
        $('.color_con').removeClass('on')
        $('.list_con li img').removeClass('on')
        $('.list_con li span').removeClass('on')
        $('.bibo').addClass('on')
        $('.slide_con3').addClass('on')
        $('.color_con3').addClass('on')
        $(this).addClass('on')
        $('.bib').addClass('on')
    })
    $('.parsel_btn').click(function () {
        $('.drag-img').removeClass('on')
        $('.slide_con').removeClass('on')
        $('.color_con').removeClass('on')
        $('.list_con li img').removeClass('on')
        $('.list_con li span').removeClass('on')
        $('.parsel').addClass('on')
        $('.slide_con4').addClass('on')
        $('.color_con4').addClass('on')
        $(this).addClass('on')
        $('.prs').addClass('on')
    })





    $('section').on('touchstart touchmove', function (e) {
        document.addEventListener('touchstart', handleTouchStart, false)
        document.addEventListener('touchmove', handleTouchMove, false)

        function getTouches(e) {
            return e.touches || e.originalEvent.touches
        }

        function handleTouchStart(e) {
            const firstTouch = getTouches(e)[0]
            xDown = firstTouch.clientX
            yDown = firstTouch.clientY
        }

        function handleTouchMove(e) {

            if (!xDown || !yDown) {
                return
            }
            var xUp = e.touches[0].clientX
            var yUp = e.touches[0].clientY
            var xDiff = xDown - xUp
            var yDiff = yDown - yUp
            let sc4 = $('.sec4')
            let sc2 = $('.sec2')
            let sc3 = $('.sec3')
            let sc2T = sc2.offset().top;
            let sc3T = sc3.offset().top;
            let sc4T = sc4.offset().top;
            let moveTop = $(window).scrollTop();
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    // left swipe
                } else {
                    // right swipe
                }
            } else {
                         // 내릴때
                if (yDiff > 0) {
                    if (moveTop<sc2T / 2) {
                        $('.sec2_text_con').css({
                            'bottom': '0',
                            'opacity': '0'
                        })
                    } else {
                        $('.sec2_text_con').css({
                            'bottom': '15%',
                            'opacity': '1'
                        })                        
                    }           
                    if(moveTop >= sc3T){
                        $('.menu_text').css({
                            'color':'black'
                        })
                        $('.menu').addClass('on')
                    }else{
                        $('.menu_text').css({
                            'color':'white'
                        })
                        $('.menu').removeClass('on')
                    }
                    if(moveTop>sc4T -500){
                        $('.sec4_left_top > div').addClass('on')
                    }else{
                        $('.sec4_left_top > div').removeClass('on')
                    }
                    // 올릴때              
                } else {
                    if(moveTop < sc3T){
                        $('.menu_text').css({
                            'color':'white'
                        })
                        $('.menu').removeClass('on')
                    }
             
                }
            }
            // console.log(yDiff)
            // console.log(yUp)
            // console.log(yDown)
            // console.log(yDiff)
            console.log(sc4T -300)
            // console.log(sc3T)
            console.log(moveTop)


            xDown = null
            yDown = null
        }
    })
});