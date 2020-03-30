$('#clientneeds').on('click',function(){
	$('#clientneeds, #clientneeds > i').toggleClass('active');
	$('.main-slider').toggleClass('move_up');
	$('#clientform').slideToggle();
});
$('.service_buttons > .service').on('click',function(){
	$(this).toggleClass('active');
});
$('.service_content').on('click',function(){
	$('.img_content').toggleClass('active');
});