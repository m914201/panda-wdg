$(function () {
  let wd1 = $('.slide div').width();
  intv = setInterval(function(){slideAni()},1000)
 

  function slideAni(){
    $('.slide').not(':animated').animate({
      marginLeft: -wd1
    },1000, function(){
      $('.slide li').eq(0).appendTo('.slide')
      $('.slide').css('marign-left',0)
    })
  }
  // console.log(wd1)




  
    setInterval(function () {
        $('.a_sec1').addClass('on')
    })

$('.circle').click(function () {
    $('.circle > img').toggleClass('on')
    $('.circle').toggleClass('on')
    $('.gnb a').toggleClass('on')
})
$('nav > p').click(function () {
    $('.circle > img').toggleClass('on')
    $('.circle').toggleClass('on')
    $('.gnb a').toggleClass('on')
})
$('.send').click(function () {
    $('.send_con').addClass('on')
})
$('.fa-times').click(function () {
$('.send_con').removeClass('on')
})

(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.textAni'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);

  

})
