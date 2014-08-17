
/********* FIJA MENU DE INFORMACIÃ“N ************/
   
   
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

	if ((elemento_arriba >= top_web) || ((elemento_arriba >= top_grafico) || (elemento_arriba >= top_apps))) 
	{
		$(".header").css({"background": "url(images/header_gradient.png) repeat-x 100% 100%"});
	  	$(".header .logo a h1.white").css({"display": "none"});
		$(".header .logo a h1.black").fadeIn("fast");
		$(".header .nav ul li a").css( "color", "#000" );
	}
	else
	{
	  	$(".header").removeAttr("style");
	  	$(".header .logo a h1.black").css({"display": "none"});
		$(".header .logo a h1.white").fadeIn("fast");
		$(".header .nav ul li a").css( "color", "#fff" );
	}
	if (elemento_arriba >= top_home) {
	  // if so, ad the fixed class
	  	$("#n_web").css({"display": "none"});
	  	$("#n_home").css({"display": "block"});
		$("#title_web").hide(0);
	} 	
	if ((elemento_arriba >= top_web) && (elemento_arriba >= top_home)) {
	  // if so, ad the fixed class
	  	$("#n_home").css({"display": "none"});
	  	$("#n_graphic").css({"display": "none"});
	  	$("#n_web").css({"display": "block"});
		$("#title_graphic").css("display", "none");
		$("#title_web").css("display", "block");
	} 	
	if ((elemento_arriba >= top_grafico) && (elemento_arriba >= top_web) && (elemento_arriba >= top_home)) {
	  // if so, ad the fixed class
	  	$(".header").css({"transition": "0s"});
	  	$("#n_web").css({"display": "none"});
	  	$("#n_apps").css({"display": "none"});
	  	$("#n_graphic").css({"display": "block"});
		$("#title_web").css("display", "none");
		$("#title_apps").css("display", "none");
		$("#title_graphic").css("display", "block");
	} 	
	if ((elemento_arriba >= top_apps) && (elemento_arriba >= top_grafico) && (elemento_arriba >= top_web) && (elemento_arriba >= top_home)) {
	  // if so, ad the fixed class
	  	$(".header").css({"transition": "0.3s"});
	  	$("#n_graphic").css({"display": "none"});
	  	$("#n_contact").css({"display": "none"});
	  	$("#n_apps").css({"display": "block"});
		$("#title_graphic").css("display", "none");
		$("#title_apps").css("display", "block");
	} 	
	if ((elemento_arriba >= top_contacto - 110)) {
		$(".header").css({"background": "none"});
		$("#title_web").css("display", "none");
		$("#title_apps").css("display", "none");
		$("#title_graphic").css("display", "none");

	}		
	if ((elemento_arriba >= top_contacto - 600)) {
		$(".footer .content").delay("8s");
		$(".footer .content").fadeIn("3s");
	}		

	if ((elemento_arriba >= top_contacto)) {
	  // if so, ad the fixed class
	  	
	  	$(".header .logo a h1.black").css({"display": "none"});
		$(".header .logo a h1.white").fadeIn("fast");
		$(".header .nav ul li a").css( "color", "#fff" );
		$("#n_apps").css({"display": "none"});
		$("#n_contact").css({"display": "block"});
	} 
  });

}  
}); 


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