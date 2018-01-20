jQuery(function($){
	$('.infinity').infiniteScroll({
		path: '.pagination__next:last',
		append: '.main',
		hideNav: '.pagination',
		debug: true
	});
});