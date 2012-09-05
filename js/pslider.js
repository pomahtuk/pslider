 /*
pSlider, a very simple image slider by pman
*/
(function($){
	$.fn.pslider = function( option ) {
	
		option = $.extend( {}, $.fn.pslider.option, option );
		
		// опции по умолчанию
		$.fn.pslider.option = {
			width: 600,
			height:300
		};
		
		//Базовый функционал - определяет контейнер, выравнивает его по центру и считает количество элементов внутри
		return this.each(function(){
		
			var elem = $(this).children('ul');
			var items = elem.children();
			var total = elem.children().size();
			var current = 0;
			
			elem.hide();
			
			$(this).children('.pSliderPane').remove();
			$(this).addClass('pSlider');
			$(this).append('<div class="pSliderPane"></div>')
			
			$(this).css({'position':'relative','left':'50%', 'width':option.width,'height':option.height, 'margin-left':-(option.width/2)});
			
			var container = $('.pSliderPane');
			
			container.css({'width':option.width*2});
			
			if (total >= 2) {
				$(this).append('<a href="#" class="next"></a>');
				$(this).prepend('<a href="#" class="prev"></a>');
				container.append('<img src="'+$(items.get(0)).children("img").attr("src")+'">');
				
				$('.pSlider a.next').click(function(){
					current = current === total-1? 0: current+1;
					
					container.children('img').addClass('old');
					container.append('<img src="'+$(items.get(current)).children("img").attr("src")+'">');
					$('.pSliderPane').css({'margin-left':'0'});
					$('.pSliderPane').animate({
						'margin-left': '-'+option.width 
					}, 1000, function() {
						$('.pSliderPane img.old').remove();
						$('.pSliderPane').css({'margin-left':'0'});
					});	
					
					return false;
				})
				
				$('.pSlider a.prev').click(function(){
					current = current === 0? total-1: current-1;
																					
					container.children('img').addClass('old');
					container.prepend('<img src="'+$(items.get(current)).children("img").attr("src")+'" >');
					$('.pSliderPane').css({'margin-left':-option.width});
					$('.pSliderPane').animate({
						'margin-left': 0 
					}, 1000, function() {
						$('.pSliderPane img.old').remove();
						//$('.pSliderPane').css({'margin-left':'0'});
					});
					
					return false;
				})				
				
			} else {
				container.append(elem.children().children('img'));
			}	
			
		})
		
	}

})(jQuery);