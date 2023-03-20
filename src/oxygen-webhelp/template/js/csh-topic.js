/*topicPages 확대축소버튼*/
$(function(){
	
	$('.fontChangeButtonPlus').on('click', function(){
		
		if($('.wh_content_area').hasClass('sizeClass1') ){
			$('.wh_content_area').removeClass('sizeClass1').addClass('sizeClass2');
		}else if($('.wh_content_area').hasClass('sizeClass2')){
			$('.wh_content_area').removeClass('sizeClass2').addClass('sizeClass3');
		}else if($('.wh_content_area').hasClass('sizeClass3')){
			$('.wh_content_area').removeClass('sizeClass3').addClass('sizeClass4');
		}else if($('.wh_content_area').hasClass('sizeClass4')){
			$('.wh_content_area').removeClass('sizeClass4').addClass('sizeClass5');
		}else if($('.wh_content_area').hasClass('sizeClass5')){
			$('.fontChangeButtonPlus').disabled = true;
		}else {
			$('.wh_content_area').addClass('sizeClass3');
			
		}
	});	
	$('.fontChangeButtonMinus').on('click', function(){
		
		if($('.wh_content_area').hasClass('sizeClass5')  ){
			$('.wh_content_area').removeClass('sizeClass5').addClass('sizeClass4');
		}else if($('.wh_content_area').hasClass('sizeClass4')){
			$('.wh_content_area').removeClass('sizeClass4').addClass('sizeClass3');
		}else if($('.wh_content_area').hasClass('sizeClass3')){
			$('.wh_content_area').removeClass('sizeClass3').addClass('sizeClass2');	
		}else if($('.wh_content_area').hasClass('sizeClass2')){
			$('.wh_content_area').removeClass('sizeClass2').addClass('sizeClass1');
		}else if($('.wh_content_area').hasClass('sizeClass1')){
			$('.fontChangeButtonMinus').disabled = true;
		}else {
			$('.wh_content_area').addClass('sizeClass2');
		}
	});	
	
});
