$(function () {
    let hd = $('.list_con > ul > li').height();
    let = len = $('.banner_con>div').length;
    // console.log(len);
    let = cnt = 0;
    let intv = setInterval(function () {
        nextAni(), searchAni(), searchprevAni();
    }, 7000);




    function nextAni() {
        $('.banner_con li').removeClass('on')
        $('.btn button').removeClass('on')
        cnt++;
        if (cnt >= 3) {
            cnt = 0;
        }
        $('.banner_con li').eq(cnt).addClass('on');
        $('.btn button').eq(cnt).addClass('on')

    }

    function searchAni() {
        $('.list_con1 > ul').not(':animated').animate({
            marginTop: -hd
        }, 1000, function () {
            $('.list_con1 > ul > li').eq(0).appendTo('.list_con1 > ul');
            $('.list_con1 > ul').css({
                marginTop: '0px'
            });

        });

    }

    function searchprevAni(){
        $('.list_con2 > ul').not(':animated').animate({
            marginTop: -hd
        }, 1000, function () {
            $('.list_con2 > ul > li').eq(0).appendTo('.list_con2 > ul');
            $('.list_con2 > ul').css({
                marginTop: '0px'
            });

        });
    }

    // function searchprevAni(){
    //     $('.list_con2 > ul').not(':animated').animate({
    //         marginTop: -hd
    //     }, 1000, function () {
    //         $('.list_con1 > ul > li').eq(0).appendTo('.list_con1 > ul');
    //         $('.list_con1 > ul').css({
    //             marginTop: '0px'
    //         });

    //     });
    // }


    $('.btn1').click(function () {
        $('.banner_con li').removeClass('on')
        $('.btn button').removeClass('on')
        $('.bn_1').addClass('on')
        $('.btn1').addClass('on')
    });
    $('.btn2').click(function () {
        $('.banner_con li').removeClass('on')
        $('.btn button').removeClass('on')
        $('.bn_2').addClass('on')
        $('.btn2').addClass('on')
    });
    $('.btn3').click(function () {
        $('.banner_con li').removeClass('on')
        $('.btn button').removeClass('on')
        $('.bn_3').addClass('on')
        $('.btn3').addClass('on')
    });
    $('.open').click(function () {
        $(this).addClass('on')
        $('.cg').addClass('on')
        $('.close').removeClass('on')
        $('.cg_typeCon').addClass('on')
    });
    $('.close').click(function () {
        $(this).addClass('on')
        $('.open').removeClass('on')
        $('.cg').removeClass('on')
        $('.cg_typeCon').removeClass('on')
    });
    $('.cg_lo1').click(function () {
        $('.cg_lo1').addClass('on')
        $('.cg').addClass('on')
        $('.open').addClass('on')
        $('.close').removeClass('on')
        $('.cg_typeCon').addClass('on')
    });
    $('.cg_lo2').click(function () {
        $('.cg_lo1').removeClass('on')
        $('.cg').removeClass('on')
        $('.close').addClass('on')
        $('.open').removeClass('on')
        $('.cg_typeCon').removeClass('on')
    });
    $('.cg_tc').click(function () {
        $(this).addClass('on')
        $('.cg_t').addClass('on')
        $('.cg_ac').removeClass('on')
        $('.cg_a').removeClass('on')
    });
    $('.cg_ac').click(function () {
        $(this).addClass('on')
        $('.cg_a').addClass('on')
        $('.cg_tc').removeClass('on')
        $('.cg_t').removeClass('on')
    });

    $('.hd_sc').click(function () {
        $('.search').slideDown(1000);
        $('.search_bg').addClass('on');
    });
    $('.sc_close').click(function () {
        $('.search').slideUp(1000);
        $('.search_bg').removeClass('on')
    });
    $('.ham_con').click(function(){
        $('.menu').toggleClass('on')
        $('.main>li').toggleClass('on')
        $('.ham1').toggleClass('on')
        $('.ham2').toggleClass('on')
        $('.ham3').toggleClass('on')

     
    });
    $('.plus').click(function(){
        $('.plus img').removeClass('on')
        $('.minus img').addClass('on')
        $('.icon').addClass('on')
    });
    $('.minus').click(function(){
        $('.minus img').removeClass('on')
        $('.icon').removeClass('on')
        $('.plus img').addClass('on')
    });






});