pSlider - ������� � �������� ��������� �������
==============================================
�������, �� HTML, CSS � jQuery ������� ����������� ��� �������������� ���������� ������� � ����������� �������� ������, �� � ������������ ����������� ���������.

�����������:
============
������ � �����:
---------------
    <!--������� ������ ��� �������� -->							
    <link type="text/css" rel="stylesheet" href="css/pslider.css">							
    <!--���������� jQuery � Google CDN -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <!-- ������ �������� --&gt;
    <script src="js/pslider.js"></script>;
							
HTML-��������:
--------------
  		<div id="pSlider">
				<ul>
					<li><img src="http://placehold.it/600x300/666666"></li>
					<li><img src="http://placehold.it/600x300/ffffff"></li>
					<li><img src="http://placehold.it/600x300/000000"></li>
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