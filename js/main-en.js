

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
					$('.navbar-default').addClass('open-mobile-menu');
				    $('.navicon').removeClass('fa-bars').addClass('fa-times');
				}
				else{
					$('.navbar-default').removeClass('open-mobile-menu');
				   	$('.navicon').removeClass('fa-times').addClass('fa-bars');
				}
			});
			// preloader
			//==============================
			// makes sure the whole site is loaded
				
				jQuery(window).load(function() {
				
				        // will first fade out the loading animation
				
				    jQuery("#status").delay(2600).fadeOut();
				
				        // will fade out the whole DIV that covers the website.
				
				    jQuery("#preloader").delay(3500).fadeOut("slow");
				
				})
			//end
			//=============================
				

		
});

