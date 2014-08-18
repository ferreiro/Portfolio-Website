
/********* FIJA MENU DE INFORMACIÃ“N ************/
   


	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	    return false;

	});

	if($(window).width() >= 1020) {

		$("#home .content .text").delay(300);
		$("#home .content .text").fadeIn(1000);
		   
		$(function () {
		var msie6 = $.browser == 'msie' && $.browser.version < 7;

		if (!msie6) {

		  var top_web = $('#web').offset().top - parseFloat($('#web').css('margin-top').replace(/auto/, -220));
		  var top_grafico = $('#graphic').offset().top - parseFloat($('#graphic').css('margin-top').replace(/auto/, 0));
		  var top_apps = $('#apps').offset().top - parseFloat($('#apps').css('margin-top').replace(/auto/, 0));
		  var top_home = $('#home').offset().top - parseFloat($('#home').css('margin-top').replace(/auto/, 0));
		  var top_contacto = $('#contact').offset().top - parseFloat($('#contact').css('margin-top').replace(/auto/, 0));


		  $(window).scroll(function (event) {
			// what the y position of the scroll is
			var elemento_arriba = $(this).scrollTop();


			/** Quitar guía de iniciación **/
			if ((elemento_arriba >= top_web -5))
			{
				$(".main .flecha_down").delay("100");
				$(".main .flecha_down").animate({ 'bottom': '15px', opacity: 1 }, 500);
			}

			/** Cabecera fija **/

			if ((elemento_arriba >= top_web)) 
			{
				$(".header").css({"background": "url(images/header_gradient.png) repeat-x 100% 100%"});
			}
			if ((elemento_arriba >= top_web - 50) || ((elemento_arriba >= top_grafico) || (elemento_arriba >= top_apps))) 
			{
				$(".header .logo a h1").css( "color", "#000" );
				$(".header .nav ul li a").css( "color", "#000" );
			}
			else 
			{
				$(".header").css({"background": "transparent"});
				$(".header .logo a h1").css( "color", "#fff" );
				$(".header .nav ul li a").css( "color", "#fff" );

			}

			/*** Navigación derecha **/

			if (elemento_arriba >= top_home) {
			  // if so, ad the fixed class
			  	$("#n_web").css({"display": "none"});
			  	$("#n_home").css({"display": "block"});
				$("#title_web").css("display", "none");
				$("#title_apps").css("display", "none");
				$("#title_graphic").css("display", "none");
			} 	
			if ((elemento_arriba >= top_web - 50) && (elemento_arriba >= top_home)) {
			  // if so, ad the fixed class
			  	$("#n_home").css({"display": "none"});
			  	$("#n_graphic").css({"display": "none"});
			  	$("#n_web").css({"display": "block"});
				$("#title_graphic").css("display", "none");
				$("#title_web").css("display", "block");
			} 	
			if ((elemento_arriba >= top_grafico - 10) && (elemento_arriba >= top_web) && (elemento_arriba >= top_home)) {
			  // if so, ad the fixed class
			  	$(".header").css({"transition": "0s"});
			  	$("#n_web").css({"display": "none"});
			  	$("#n_apps").css({"display": "none"});
			  	$("#n_graphic").css({"display": "block"});
				$("#title_web").css("display", "none");
				$("#title_apps").css("display", "none");
				$("#title_graphic").css("display", "block");
			} 	
			/** Contacto **/
			if ((elemento_arriba >= top_apps - 5) && (elemento_arriba >= top_grafico) && (elemento_arriba >= top_web) && (elemento_arriba >= top_home)) {
			  // if so, ad the fixed class
			  	$(".header").css({"transition": "0.1s"});
			  	$("#n_graphic").css({"display": "none"});
			  	$("#n_contact").css({"display": "none"});
			  	$("#n_apps").css({"display": "block"});
				$("#title_graphic").css("display", "none");
				$("#title_apps").css("display", "block");
				$(".flecha_down").css("display", "block");
			} 	

			if ((elemento_arriba >= top_contacto - 100)) {
				$(".header").removeAttr("style");
				$(".header").css({"background": "none"});
				$(".header .title_top").css("display", "none");
				$(".header .logo a h1").css( "color", "#fff" );
				$(".header .nav ul li a").css( "color", "#fff" );
				$(".flecha_down").css("display", "none");
				$(".footer .content").fadeIn(1000);

			}	
			if ((elemento_arriba >= top_contacto)) {
			 	 // if so, ad the fixed class
				$("#n_apps").css({"display": "none"});
				$("#n_contact").css({"display": "block"}); 
			} 
		  });

		}  
		}); 

	}
	else
	{
		$(".mobile_button").click(function() {
			$("#menu_mobile").show(0);
			$(".mobile_header .nav ul li a").click(function() {
				$("#menu_mobile").hide(0);
			});
		});
	}




