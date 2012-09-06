 /*
pSlider, a very simple image slider by pman
*/
(function($){
	$.fn.pslider = function( option ) {
	
		//Базовый функционал - определяет контейнер, выравнивает его по центру и считает количество элементов внутри
		return this.each(function(){
		
			var elem = $(this).children('ul');
			var items = elem.children(); //получаем список элементов с картинками. в данном случае элементов <li>
			var total = elem.children().size(); //узнаем их количество
			var current = 0; //ставим текущий элемент в 0
			
			elem.hide(); //прячим исходную разметку
			
			$(this).children('.pSliderPane').remove(); //на всякий случай, если ранее на странице уже вызывался слайдер - удаляем его следы.
			$(this).addClass('pSlider'); //ghjoftv cnbkbpfwb.
			$(this).append('<div class="pSliderPane"></div>')//добавляем панель для фотографий
			
			$(this).css({'position':'relative','left':'50%', 'width':option.width,'height':option.height, 'margin-left':-(option.width/2)});
			//центруем элемент слайдшоу относительно родительского элемента
			
			var container = $('.pSliderPane');
			//создаём переменную для удобства
			
			container.css({'width':option.width*2});
			//устанавливаем размер панели в 2 ширины слайдера
			
			if (total >= 2) {//если есть, что переключать
				$(this).append('<a href="#" class="next"></a>'); //добавляем кнопки переключения слайдов
				$(this).prepend('<a href="#" class="prev"></a>'); 
				container.append('<img src="'+$(items.get(0)).children("img").attr("src")+'">');//и первичный слайд
							
				$('.pSlider a.next').click(function(){ //добавляем обработчик для кнопки "Далее"
					current = current === total-1? 0: current+1; //вычисляем изображение для показа
					$('.pSliderPane img.old').remove();//убираем старое изображение	на всякий случай
					container.children('img').addClass('old'); //помечаем старое изображение классом old
					container.append('<img src="'+$(items.get(current)).children("img").attr("src")+'">');//добавляем следующее на панель после старого
					$('.pSliderPane').css({'margin-left':'0'});//на всякий случай сбрасываем положение панели
					$('.pSliderPane').stop(false,false).animate({ //анимированно сдвигаем панель на ширину слайдера влево, тем самым уводя из обзора старую картинку и показывая новую
						'margin-left': '-='+option.width 
					}, 1000, function() {//после анимации, длиной в секунду
						$('.pSliderPane img.old').remove(); //удаляем старое изображение
						container.css({'margin-left':'0'}); //возвращаем панель на место
						//animating = false;//закончили анимацию, всё в номре.
					});	
					
					return false; //предотвращаем дефолтное поведение ссылки
				})
				
				$('.pSlider a.prev').click(function(){ //обработчик события "Назад"
					current = current === 0? total-1: current-1; //вычисляем, какой изображение показывать
					$('.pSliderPane img.old').remove();//убираем старое изображение	на всякий случай										
					container.children('img').addClass('old'); //маркируем старое изображение
					container.prepend('<img src="'+$(items.get(current)).children("img").attr("src")+'" >');//добавляем новое до старого
					$('.pSliderPane').css({'margin-left':-option.width});//сдвигаем панель на исходную
					$('.pSliderPane').stop(false,false).animate({//двигаем до нуля
						'margin-left': '+='+option.width
					}, 1000, function() {//а после секундной анимации
						$('.pSliderPane img.old').remove();//убираем старое изображение
						//container.css({'margin-left':'0'});
					});
					
					return false; //предотвращаем стандартное поведение ссылки
				})				
				
			} 
			else if (total=1) {//а если переключать нечего, но что-то есть
				container.append(elem.children().children('img'));//просто покажем изображение
			}
			else { //ну а если совсем пусто
				container.append('<p>К сожалению, нет элементов для слайдера.</p>');//сообщим пользователю!
			}
			
		})
		
	}

})(jQuery);