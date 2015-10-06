

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

			// page loader
			// =====================================================================
			function changePage(url, bool) {
			    isAnimating = true;
			    // trigger page animation
			    $('body').addClass('page-is-changing');
			    //...
			    loadNewContent(url, bool);
			    //...
			}

			$('main').on('click', '[data-type="page-transition"]', function(event){
			    event.preventDefault();
			    //detect which page has been selected
			    var newPage = $(this).attr('href');
			    //if the page is not animating - trigger animation
			    if( !isAnimating ) changePage(newPage, true);
			});

			

			function loadNewContent(url, bool) {
			  	var newSectionName = 'cd-'+url.replace('.html', ''),
			  		section = $('<div class="cd-main-content '+newSectionName+'"></div>');
			  		
			  	section.load(url+' .cd-main-content > *', function(event){
			    	// load new content and replace <main> content with the new one
			      	$('main').html(section);
			      	//...
			      	$('body').removeClass('page-is-changing');
			      	//...
			 
			      	if(url != window.location){
			        	//add the new page to the window.history
			        	window.history.pushState({path: url},'',url);
			      	}
				});
			}

			$(window).on('popstate', function() {
			    var newPageArray = location.pathname.split('/'),
			        //this is the url of the page to be loaded 
			        newPage = newPageArray[newPageArray.length - 1];
			    if( !isAnimating ) changePage(newPage);
			});
			
			//page loader end
			// ========================================================= 

		
});

