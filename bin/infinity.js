jQuery(function($){
	$('.infinity').infiniteScroll({
		path: '.pagination__next',
		append: '.main',
		hideNav: '.pagination',
		debug: true
	});

	var nextURL;

	function updateNextURL( doc ) {
	  nextURL = $( doc ).find('.pagination__next').attr('href');
	}
	// get initial nextURL
	updateNextURL( document );

	// init Infinite Scroll
	var $container = $('.infinity').infiniteScroll({
	  // use function to set custom URLs
	  path: function() {
	    return nextURL;
	  },
	});

	// update nextURL on page load
	$container.on( 'load.infiniteScroll', function( event, response ) {
	  updateNextURL( response );
	});

});