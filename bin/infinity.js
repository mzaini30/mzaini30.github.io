jQuery(function($){
	$('.infinity').infiniteScroll({
		path: '.pagination__next',
		append: '.main',
		hideNav: '.pagination',
		debug: true
	});
	$(".infinity").infiniteScroll("destroy");
});