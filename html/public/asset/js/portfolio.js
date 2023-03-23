$(function () {
  $('#logoDiv').viSimpleSlider({
    ease: 'easeOutQuart',
    autoPlay: true,
    autoTime: 3000,
    speed: 400,
    mobileSwipe: true,
    desktopSwipe: true,
  })
  $('#webDiv').viSimpleSlider({
    ease: 'easeOutQuart',
    autoPlay: true,
    autoTime: 3000,
    speed: 400,
    mobileSwipe: true,
    desktopSwipe: true,
  })
  setInterval(function () {
    $('p_sec1').addClass('on')
  })
  setTimeout(function () {
    $('footer').css({
      opacity: '1',
    })
  }, 2000)
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
  $(this).on('mousewheel DOMMouseScroll', function (e) {
    let viewportHeight = $(window).height()
    let sh = $('section').height()
    // console.log(sh)
    let scrolltop = $(window).scrollTop()
    // console.log(scrolltop)
    // console.log(viewportHeight)
    let E = e.originalEvent
    // console.log(E)

    delta = 0
    if (viewportHeight / 3 < scrolltop) {
      $('.web1').animate(
        {
          top: 0,
          left: 0,
          opacity: 1,
        },
        500,
      )
    }
    // console.log(ht)
    if (viewportHeight / 2 < scrolltop) {
      $('.web2').animate(
        {
          top: 0,
          right: 0,
          opacity: 1,
        },
        500,
      )
    }
    if (viewportHeight <= scrolltop) {
      $('.web3').animate(
        {
          top: 0,
          left: 0,
          opacity: 1,
        },
        500,
      )
    }
    e.preventDefault()
  })

  var posY
  $('.box').on('click', function (e) {
    $('.detail').scrollTop(0)
    posY = $(window).scrollTop()
    $('html, body').addClass('not_scroll')
    $('.detail').css({
      opacity: '1',
      'z-index': '9999',
    })
    // $(".detail1 > div").css("top",-posY);
  })
  $('.logo > img').on('click', function (e) {
    $('.detail').scrollTop(0)
    posY = $(window).scrollTop()
    $('html, body').addClass('not_scroll')
    $('.detail').css({
      opacity: '1',
      'z-index': '9999',
    })
    // $(".detail1 > div").css("top",-posY);
  })
  $('.slide_logo > img').click(function () {
    $('.detail').scrollTop(0)
    $('html, body').addClass('not_scroll')
    $('.detail').css({
      opacity: '1',
      'z-index': '9999',
    })
  })

  $('.box1').on('click', function (e) {
    $('.semi').css({
      opacity: '1',
    })
  })
  $('.logo1 > img').on('click', function (e) {
    $('.semi').css({
      opacity: '1',
    })
  })
  $('.slide_logo1>img').on('click', function (e) {
    $('.semi').css({
      opacity: '1',
    })
  })

  $('.box2').on('click', function (e) {
    $('.uc').css({
      opacity: '1',
    })
  })
  $('.logo2').on('click', function (e) {
    $('.uc').css({
      opacity: '1',
    })
  })
  $('.slide_logo2>img').on('click', function (e) {
    $('.uc').css({
      opacity: '1',
    })
  })
  $('.box3').on('click', function (e) {
    $('.uc').css({
      opacity: '1',
    })
  })
  $('.logo3').on('click', function (e) {
    $('.dj').css({
      opacity: '1',
    })
  })
  $('.slide_logo3>img').on('click', function (e) {
    $('.dj').css({
      opacity: '1',
    })
  })

  $('.detail> i').on('click', function () {
    $('html, body').removeClass('not_scroll')
    $('.detail').css({
      opacity: '0',
      'z-index': '-9999',
    })
    $('.detail > div >img').css({
      opacity: '0',
    })
    posY = $(window).scrollTop(posY)
  })
  $('.detail').on('click', function () {
    $('html, body').removeClass('not_scroll')
    $('.detail').css({
      opacity: '0',
      'z-index': '-9999',
    })
    $('.detail > div >img').css({
      opacity: '0',
    })
    posY = $(window).scrollTop(posY)
  })
  $('.web1 > a > img').mouseover(function () {
    let aht = $('.web1 > a').height()
    let imght = $('.web1 > a >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.web2 > a > img').mouseover(function () {
    let aht = $('.web2 > a').height()
    let imght = $('.web2 > a >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.web3 > a > img').mouseover(function () {
    let aht = $('.web3 > a').height()
    let imght = $('.web3 > a >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.web > a > img').mouseleave(function () {
    $(this).stop().animate({
      marginTop: 0,
    })
  })
  $('.mobile_web1 > a > img').mouseover(function () {
    let aht = $('.mobile_web1 > a').height()
    let imght = $('.mobile_web1 > a >img').height()
    let goTop = imght - aht
    // console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web2 > a > img').mouseover(function () {
    let aht = $('.mobile_web2 > a').height()
    let imght = $('.mobile_web2 > a >img').height()
    let goTop = imght - aht
    // console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web3 > a > img').mouseover(function () {
    let aht = $('.mobile_web3 > a').height()
    let imght = $('.mobile_web3 > a >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web > a > img').mouseleave(function () {
    $(this).stop().animate({
      marginTop: 0,
    })
  })
  $('.mobile_web1 > p > img').mouseover(function () {
    let aht = $('.mobile_web1 > p').height()
    let imght = $('.mobile_web1 > p >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web2 > p > img').mouseover(function () {
    let aht = $('.mobile_web2 > p').height()
    let imght = $('.mobile_web2 > p >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web3 > p > img').mouseover(function () {
    let aht = $('.mobile_web3 > p').height()
    let imght = $('.mobile_web3 > p >img').height()
    let goTop = imght - aht
    console.log(imght)
    $(this).stop().animate(
      {
        marginTop: -goTop,
      },
      5000,
    )
  })
  $('.mobile_web > p > img').mouseleave(function () {
    $(this).stop().animate({
      marginTop: 0,
    })
  })

  setInterval(function () {
    let max = $(window).width()
    // console.log(max)
    if (max <= 700) {
      $('#logoDiv').css({
        display: 'block',
      })
    } else {
      $('#logoDiv').css({
        display: 'none',
      })
    }
  })
  let wd = $('.slide_con').width()
  let wd2 = $('.slide_con > li').width()
  $('.dot1').click(function () {
    $(this).addClass('on')
    $('.dot2').removeClass('on')
    $('.dot3').removeClass('on')
    $('.slide_con').animate({
      left: 0,
    })
  })
  $('.dot2').click(function () {
    $(this).addClass('on')
    $('.dot1').removeClass('on')
    $('.dot3').removeClass('on')
    $('.slide_con').animate({
      left: -wd2,
    })
  })
  $('.dot3').click(function () {
    $('.dot2').removeClass('on')
    $('.dot1').removeClass('on')
    $(this).addClass('on')
    $('.slide_con').animate({
      left: -wd2 * 2,
    })
  })
  $('.web_dot1').click(function () {
    $(this).addClass('on')
    $('.web_dot2').removeClass('on')
    $('.web_dot3').removeClass('on')
    $('.web_slide_con').animate({
      left: 0,
    })
  })
  $('.web_dot2').click(function () {
    $(this).addClass('on')
    $('.web_dot1').removeClass('on')
    $('.web_dot3').removeClass('on')
    $('.web_slide_con').animate({
      left: -wd2,
    })
  })
  $('.web_dot3').click(function () {
    $('.web_dot2').removeClass('on')
    $('.web_dot1').removeClass('on')
    $(this).addClass('on')
    $('.web_slide_con').animate({
      left: -wd2 * 2,
    })
  })
})
