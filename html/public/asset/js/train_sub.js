$(function () {
    $('.family').click(function () {
        $('.family .fa-caret-down').toggleClass('to')
        $('.family .fa-caret-up').toggleClass('to')
        $('.family_list').toggleClass('to')
        $('.lang .fa-caret-down').addClass('to')
        $('.lang .fa-caret-up').removeClass('to')
        $('.lang_list').removeClass('to')

    });
    $('.lang').click(function () {
        $('.lang .fa-caret-down').toggleClass('to')
        $('.lang .fa-caret-up').toggleClass('to')
        $('.lang_list').toggleClass('to')
        $('.family .fa-caret-down').addClass('to')
        $('.family .fa-caret-up').removeClass('to')
        $('.family_list').removeClass('to')
    });
    $('.aa').click(function () {
        $('.if_con').addClass('on')
    });
    $('.if_con>span').click(function () {
        $('.if_con').removeClass('on')
    })

    $(function () {
        let hd1 = $('.elementary').height() / 2;
        console.log(hd1)
        let hd2 = $('.slide>li').height();
        let cnt = 0;
        
        // 유치부
        $('.kindergarden_sp>.fa-angle-down').click(function () {
            cnt++;
            if (cnt >= 4) {
                cnt = 3;
            }
            $('.kindergarden>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.kindergarden_sp>.fa-angle-double-up').click(function () {
            cnt = 0;
            $('.kindergarden>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.kindergarden_sp>.fa-angle-up').click(function () {
            cnt--;
            if (cnt < 0) {
                cnt = 0;
                // console.log(hd2)
            }
            $('.kindergarden>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.kindergarden_sp>.fa-angle-double-down').click(function () {
            cnt = 3;
            $('.kindergarden>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        // 유치부
        
        // 초등부

        $('.elementary_sp>.fa-angle-down').click(function () {
            cnt++;
            if (cnt >= 8) {
                cnt = 7;
            }
            $('.elementary>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.elementary_sp>.fa-angle-up').click(function () {
            cnt--;
            if (cnt < 0) {
                cnt = 0;
                // console.log(hd2)
            }
            $('.elementary>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.elementary_sp>.fa-angle-double-up').click(function () {
            cnt = 0;
            $('.elementary>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.elementary_sp>.fa-angle-double-down').click(function () {
            cnt = 7;
            $('.elementary>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        // 초등부
        // 2006년 ~ 2010년
        $('.six_sp>.fa-angle-down').click(function () {
            cnt++;
            if (cnt >= 4) {
                cnt = 3;
            }
            $('.six>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.six_sp>.fa-angle-up').click(function () {
            cnt--;
            if (cnt < 0) {
                cnt = 0;
                // console.log(hd2)
            }
            $('.six>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.six_sp>.fa-angle-double-up').click(function () {
            cnt = 0;
            $('.six>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.six_sp>.fa-angle-double-down').click(function () {
            cnt = 3;
            $('.six>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        // 2006년 ~ 2010년
        // 2011 ~ 2015년

        $('.eleven_sp>.fa-angle-down').click(function () {
            cnt++;
            if (cnt >= 3) {
                cnt = 2;
            }
            $('.eleven>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.eleven_sp>.fa-angle-up').click(function () {
            cnt--;
            if (cnt < 0) {
                cnt = 0;
                // console.log(hd2)
            }
            $('.eleven>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.eleven_sp>.fa-angle-double-up').click(function () {
            cnt = 0;
            $('.eleven>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.eleven_sp>.fa-angle-double-down').click(function () {
            cnt = 2;
            $('.eleven>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });

        // 2011 ~ 2015년
        // 2016 ~ 2019년

        $('.sixteen_sp>.fa-angle-down').click(function () {
            cnt++;
            if (cnt >= 2) {
                cnt = 1;
            }
            $('.sixteen>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.sixteen_sp>.fa-angle-up').click(function () {
            cnt--;
            if (cnt < 0) {
                cnt = 0;
                // console.log(hd2)
            }
            $('.sixteen>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.sixteen_sp>.fa-angle-double-up').click(function () {
            cnt = 0;
            $('.sixteen>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });
        $('.sixteen_sp>.fa-angle-double-down').click(function () {
            cnt = 1;
            $('.sixteen>.slide_con').animate({
                marginTop: -hd1 * cnt
            })
        });

        // 2016 ~ 2019년

        // 클릭 이벤트
        $(".kindergarden_text").click(function () {
            $('.kindergarden>.slide_con').addClass('on')
            $('.kindergarden_sp').addClass('on')

            $('.introduction').removeClass('on')
            $('.review').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
        })
        $('.introduction_text').click(function () {
            $('.introduction').addClass('on')

            $('.kindergarden>.slide_con').removeClass('on')
            $('.kindergarden_sp').removeClass('on')
            $('.review').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
        });
        $('.review_text').click(function () {
            $('.review').addClass('on')

            $('.kindergarden_sp').removeClass('on')
            $('.kindergarden>.slide_con').removeClass('on')
            $('.introduction').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
        });
        $('.elementary_text').click(function(){
            $('.elementary>.slide_con').addClass('on')
            $('.elementary_sp').addClass('on')

            $('.kindergarden_sp').removeClass('on')
            $('.kindergarden>.slide_con').removeClass('on')
            $('.introduction').removeClass('on')
            $('.review').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
        });
        $('.six_text').click(function(){
            $('.six>.slide_con').addClass('on')
            $('.six_sp').addClass('on')

            $('.kindergarden_sp').removeClass('on')
            $('.kindergarden>.slide_con').removeClass('on')
            $('.introduction').removeClass('on')
            $('.review').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
           
        });
        $('.eleven_text').click(function(){
            $('.eleven>.slide_con').addClass('on')
            $('.eleven_sp').addClass('on')

            $('.kindergarden_sp').removeClass('on')
            $('.kindergarden>.slide_con').removeClass('on')
            $('.introduction').removeClass('on')
            $('.review').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.sixteen>.slide_con').removeClass('on')
            $('.sixteen_sp').removeClass('on')
           
        });
        $('.sixteen_text').click(function(){
            $('.sixteen>.slide_con').addClass('on')
            $('.sixteen_sp').addClass('on')

            $('.kindergarden_sp').removeClass('on')
            $('.kindergarden>.slide_con').removeClass('on')
            $('.introduction').removeClass('on')
            $('.review').removeClass('on')
            $('.elementary>.slide_con').removeClass('on')
            $('.elementary_sp').removeClass('on')
            $('.six>.slide_con').removeClass('on')
            $('.six_sp').removeClass('on')
            $('.eleven>.slide_con').removeClass('on')
            $('.eleven_sp').removeClass('on')
           
        });
        
    });
});