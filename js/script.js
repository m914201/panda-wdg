$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	$('.h1_1').hide();
	$('.h1_2').hide();
	$('.h1_3').hide();
	var h1_1 = $(".h1_1")
	var h1_2 = $(".h1_2")
	var h1_3 = $(".h1_3")
		userText = $('#userText'); 
	
	// Shuffle the contents of container
	h1_1.shuffleLetters();
	h1_2.shuffleLetters();
	h1_3.shuffleLetters();

	// Bind events
	userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	setTimeout(function(){
		$('.h1_1').show();
		// Shuffle the container with custom text
		h1_1.shuffleLetters({
			"text": "끈기"
		});
		
		userText.val("type anything and hit return..").fadeIn();
		
	},1000);
	setTimeout(function(){
		$('.h1_2').show();
		// Shuffle the container with custom text
		h1_2.shuffleLetters({
			"text": "노력"
		});
		
		userText.val("type anything and hit return..").fadeIn();
		
	},1500);
	setTimeout(function(){
		$('.h1_3').show();
		// Shuffle the container with custom text
		h1_3.shuffleLetters({
			"text": "책임감"
		});
		
		userText.val("type anything and hit return..").fadeIn();
		
	},2000);
	
});

