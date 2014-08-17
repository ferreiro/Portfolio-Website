
/********* FIJA MENU DE INFORMACIÃ“N ************/
 
	// JavaScript Document
  $(document).ready(function(){



			$(function () {
			var msie6 = $.browser == 'msie' && $.browser.version < 7;

			if (!msie6) {
			
			  var top = $('#web').offset().top - parseFloat($('#web').css('margin-top').replace(/auto/, 0));


			  $(window).scroll(function (event) {
				// what the y position of the scroll is
				var elemento_arriba = $(this).scrollTop();
				
				// whether that's below the form
				if (elemento_arriba >= top) {
				  // if so, ad the fixed class
					
				} 
				
			  });

			}  
			});


 

  });
/*
$(function () {
var msie6 = $.browser == 'msie' && $.browser.version < 7;

if (!msie6) {

  var top_web = $('#web').offset().top - parseFloat($('#web').css('margin-top').replace(/auto/, 0));
  var top_grafico = $('#graphic').offset().top - parseFloat($('#graphic').css('margin-top').replace(/auto/, 0));
  var top_apps = $('#apps').offset().top - parseFloat($('#apps').css('margin-top').replace(/auto/, 0));
  var top_home = $('#home').offset().top - parseFloat($('#home').css('margin-top').replace(/auto/, 0));
  var top_contacto = $('#contact').offset().top - parseFloat($('#contact').css('margin-top').replace(/auto/, 0));


  $(window).scroll(function (event) {
	// what the y position of the scroll is
	var elemento_arriba = $(this).scrollTop();

	// whether that's below the form
	if ((elemento_arriba >= top_web) || (elemento_arriba >= top_grafico) || (elemento_arriba >= top_apps) ) {
	  // if so, ad the fixed class
		
		$(".header").addClass("header_black");
	} 
	else if((elemento_arriba >= top_home) || (elemento_arriba >= top_contacto)) {
		$(".header").removeClass("header_black");
	}
	
  });

}  
});
*/
