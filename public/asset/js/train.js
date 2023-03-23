$(function () {
    let elm = 'section';
    $(elm).each(function (index) {
        $(this).on('mousewheel DOMMouseScroll', function (e) {
            let E = e.originalEvent;
            e.preventDefault();
            let moveTop = $(window).scrollTop();
            let elmSelector = $(elm).eq(index);
            let ht =$(window).height();
            delta = 0;

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
            $('html , body').stop().animate({
                scrollTop: moveTop + 'px'
            }, 800)

            if (moveTop>=ht*1 && moveTop<ht*2){
                $('.text2_con>.blur>ul').addClass('on')
                $('.text2_con>h1').addClass('on')
                $('.text2_con>h1:nth-child(2)').addClass('on')
            }else{
                $('.text2_con>.blur>ul').removeClass('on')
                $('.text2_con>h1').removeClass('on')
                $('.text2_con>h1:nth-child(2)').removeClass('on')
            }
            if (moveTop>=ht*2 && moveTop<ht*3){
                $('.text3_con>.blur>ul').addClass('on')
                $('.bgEvent>div').addClass('on')
                $('.text3_con>h1').addClass('on')
            }else{
                $('.text3_con>.blur>ul').removeClass('on')
                $('.bgEvent>div').removeClass('on')
                $('.text3_con>h1').removeClass('on')

            }
            if(moveTop>=ht*3 && moveTop<ht*4){
                $('.black').addClass('on')
                $('.blacklg').addClass('on')
            }else{
                $('.black').removeClass('on')
                $('.blacklg').removeClass('on')
                
            }
        });
    });

    // 섹션4 마우스호버 이벤트
    $('.aa').mouseover(function(){
        $(this).addClass('on')
        $('.bg_go1').addClass('on')

    });
    $('.aa').mouseleave(function(){
        $(this).removeClass('on')
        $('.bg_go1').removeClass('on')
    });
    $('.ab').mouseover(function(){
        $(this).addClass('on')
        $('.bg_go2').addClass('on')

    });
    $('.ab').mouseleave(function(){
        $(this).removeClass('on')
        $('.bg_go2').removeClass('on')
    });
    $('.ac').mouseover(function(){
        $(this).addClass('on')
        $('.bg_go3').addClass('on')

    });
    $('.ac').mouseleave(function(){
        $(this).removeClass('on')
        $('.bg_go3').removeClass('on')
    });
    $('.ad').mouseover(function(){
        $(this).addClass('on')
        $('.bg_go4').addClass('on')

    });
    $('.ad').mouseleave(function(){
        $(this).removeClass('on')
        $('.bg_go4').removeClass('on')
    });
       
});

$(function(){
    $('.family').click(function(){
        $('.family .fa-caret-down').toggleClass('to')
        $('.family .fa-caret-up').toggleClass('to')
        $('.family_list').toggleClass('to')
        $('.lang .fa-caret-down').addClass('to')
        $('.lang .fa-caret-up').removeClass('to')
        $('.lang_list').removeClass('to')
       
    });
    $('.lang').click(function(){
        $('.lang .fa-caret-down').toggleClass('to')
        $('.lang .fa-caret-up').toggleClass('to')
        $('.lang_list').toggleClass('to')
        $('.family .fa-caret-down').addClass('to')
        $('.family .fa-caret-up').removeClass('to')
        $('.family_list').removeClass('to')
    });
    $('.aa').click(function(){
        $('.if_con').addClass('on')
    });
    $('.if_con>span').click(function(){
        $('.if_con').removeClass('on')
    })
});


    








$(function () {

    let t = new Date();
    // 현재 시간
    let nowYear = t.getFullYear();
    // 현재년도
    let theYear = (1988);
    // 박물관 개장일
    let diffYear = nowYear - theYear
    // // 개장일로부터 현재까지 몇년
    // console.log(diffYear)
    let theDate = new Date(theYear, 0, 26)
    // 개장일
    // console.log(theDate)
    let diffDate = t - theDate
    // console.log(diffDate)
    let day = Math.ceil(diffDate / (24 * 60 * 60 * 1000)) % 365
    // 개장 후 지금까지 일수
    let hours = Math.floor(diffDate / (60 * 60 * 1000)) % 24
    // 개장 후 지금까지 시간
    let minutes = Math.floor(diffDate / (60 * 1000)) % 60
    // 개장 후 지금까지 분
    let seconds = Math.floor(diffDate / (1000)) % 60
    // 개장 후 지금까지 초
    



    setInterval(function () {
        
        // timeAni();

        let t = new Date();
        // 현재 시간
        let nowYear = t.getFullYear();
        // 현재년도
        // console.log(nowYear)
        let theYear = (1988);
        // 박물관 개장일
        // console.log(theYear)
        let diffYear = nowYear - theYear
        // // 개장일로부터 현재까지 몇년
        // console.log(diffYear)
        let theDate = new Date(theYear, 0, 26)
        // 개장일
        // console.log(theDate)
        let diffDate = t - theDate
        // console.log(diffDate)
        let day = Math.ceil(diffDate / (24 * 60 * 60 * 1000)) % 365
        // 개장 후 지금까지 일수
        let hours = Math.floor(diffDate / (60 * 60 * 1000)) % 24
        // 개장 후 지금까지 시간
        let minutes = Math.floor(diffDate / (60 * 1000)) % 60
        // 개장 후 지금까지 분
        let seconds = Math.floor(diffDate / (1000)) % 60
        // 개장 후 지금까지 초
        if(day>=10){
            day = day;
        }else{
            day = "0" + day;
        }
        if(hours>=10){
            hours = hours;
        }else{
            hours = "0" + hours;
        }
        if(minutes>=10){
            minutes = minutes;
        }else{
            minutes = "0" + minutes;
        }
        if(seconds>=10){
            seconds = seconds;
        }else{
            seconds = "0" + seconds;
        }
      
      
        $('#years').text(diffYear + 'Years');
        $('#days').text(day + 'Day');
        $('#hours').text(hours + ' :');
        $('#minutes').text(minutes + ' :');
        $('#seconds').text(seconds);
    
    }, 1000);

    


});