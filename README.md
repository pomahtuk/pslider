pSlider - слайдер в качестве тестового задания
==============================================
Простой, на HTML, CSS и jQuery слайдер изображений без дополнительных визуальных эффетов и обозначения текущего слайда, но с возможностью бесконечной прокрутки.

Подключение:
============
Скрипт и стили:
---------------
    <!--таблица стилей для слайдера -->							
    <link type="text/css" rel="stylesheet" href="css/pslider.css">							
    <!--библиотека jQuery с Google CDN -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <!-- Скрипт слайдера -->
    <script src="js/pslider.js"></script>;
							
HTML-разметка:
--------------
  		<div id="pSlider">
			<ul>
				<li><img src="img/1.jpg"></li>
				<li><img src="img/2.jpg"></li>
				<li><img src="img/3.jpg"></li>
				<li><img src="img/4.jpg"></li>
			</ul>
		</div>							
	
JavaScript:
-----------
	$(document).ready(function(){
		$("#pSlider").pslider({
			width:600,
			height:300
		});
	});	