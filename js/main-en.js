

$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['main', 'about', 'background', 'maane center','guidance','Initiatives','vision','contact'],
				sectionsColor: ['#fff', '#fff', '#fff','#fff', '#fff', '#fff','#fff', '#fff'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['main', 'about', 'background', 'maane center','guidance','Initiatives','vision','contact'],
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
					$('.navbar-default').addClass('whitey');
				    $('.navicon').removeClass('fa-bars').addClass('fa-times');
				}
				else{
					$('.navbar-default').removeClass('whitey');
				   	$('.navicon').removeClass('fa-times').addClass('fa-bars');
				}
			});
				

		
});

