

$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['ראשי', 'אודות', 'רקע', 'מרכז מענה','הדרכה והסברה','יוזמות','חזון','צור קשר'],
				sectionsColor: ['#fff', '#fff', '#fff','#fff', '#fff', '#fff','#fff', '#fff'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['ראשי', 'אודות', 'רקע', 'מרכז מענה','הדרכה והסברה','יוזמות','חזון','צור קשר'],
				scrollingSpeed: 1700,
				responsiveWidth: 900
			});

			$('.scrl-dwn-i').click(function(){
				$.fn.fullpage.moveSectionDown();

			});

			$(function () {
			  $('[data-toggle="tooltip"]').tooltip()
			});

			$('.navbar-toggle').click(function(){
				if ($('.navicon').hasClass('fa-bars')) {
					$('.navbar-default').addClass('open-mobile-menu');
				    $('.navicon').removeClass('fa-bars').addClass('fa-times');
				}
				else{
					$('.navbar-default').removeClass('open-mobile-menu');
				   	$('.navicon').removeClass('fa-times').addClass('fa-bars');
				}
			});
});

