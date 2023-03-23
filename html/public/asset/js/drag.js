var UItroc = (function () {
	return {
		init: function () {
            this.event();
		},
		
        event:function(){
           
            

            //drag Event
            setTimeout(function() {
                dragMaskFunc($('.drag-wrap'));
                mobCarHidden();
            }, 500);

            setTimeout(carSize, 500);

            $(window).resize(function() {
                dragMaskFunc($('.drag-wrap'));
                carSize();
                mobCarHidden();
            });

            function carSize() {
                var winW = $(window).width();
                var defaultH = 200;
                var dragArea = $('.model-drag-area');
                var dragMask = dragArea.find('.drag-mask');
                var dragImg = dragMask.children('.drag-img.mob');
                var dragImgH = dragImg.height();
                if(winW <= 200) dragArea.css({height: dragImgH});
                else dragArea.css({height: defaultH});
            }
        
            // Drag Mask Func
            function dragMaskFunc(target) {
                var _target = target, //드래깅 영역
                    $maskDiv = _target.find('.drag-mask'), //마스크 이미지
                    $defaultDiv = _target.find('.drag-default'), //기본 이미지 - 레벨 더 위에 있음
                    $dragBtn = _target.find('.drag-bar'); //드래그 버튼
        
                _target.on("mousemove",function(e){
                    var _x = e.pageX-_target.offset().left;
                    $maskDiv.css({width: _x});
                    $dragBtn.css('left',_x);
                    $defaultDiv.css({width: _target.width() - _x});
                });
        
                //사이즈 셋팅
                _target.find('div > img.drag-img').css({width: _target.width()});
                var centerPos = _target.width() * 0.66;
                $maskDiv.css({width: centerPos});
                $dragBtn.css({
                    'left' : centerPos,
                    'height' : '200px'
                });
        
                $defaultDiv.css({width: centerPos});
            }
        
            function mobCarHidden() {
                var winW = $(window).width(),
                    winWGrid = (winW/24)*2,
                    dragBarW = $('.model-touch-area').find('.drag-bar').width(),
                    carHiddenW = $('.model-touch-area').width(),
					_width = (carHiddenW / 2);
					
				$('.model-touch-area').find('.drag-bar-mobile').on('touchmove', function (e) {
					var dragBarW = $('.model-touch-area').find('.drag-bar-mobile').width();
					var xPos = e.originalEvent.touches[0].pageX-winWGrid-(dragBarW/2);
        
                    $('.car-hidden').css({ width: (xPos + (dragBarW / 2))+ 'px' });
                    $('.model-touch-area').find('.drag-bar-mobile').css({ marginLeft: xPos + 'px' });
        
                    if (parseInt($('.model-touch-area').find('.drag-bar-mobile').css('margin-left')) <= (dragBarW * -0.5)) {
                        $('.model-touch-area').find('.drag-bar').css({ marginLeft: dragBarW * -0.5 });
                    } else if (parseInt($('.model-touch-area').find('.drag-bar-mobile').css('margin-left')) >= ((winW/24)*20) - (dragBarW / 2)) {
                        $('.model-touch-area').find('.drag-bar-mobile').css({ marginLeft: ((winW/24)*20) - (dragBarW / 2) });
                    } else {
                        $('.model-touch-area').find('.drag-bar-mobile').css({ marginLeft: xPos + 'px' });
                    }
				});
        
                $('.car-hide').children('img').css({ width: ((winW/24)*20) });
                $('.car-hidden').find('img').css({ width: ((winW/24)*20) });
        
                $('.model-touch-area').find('.drag-bar').css({ marginLeft: ($(".car-hidden").width() - (dragBarW / 2)) + 'px' });
            }
        },
		
	}
})();


$(document).ready(function () {
	UItroc.init();
});