// source: github.com/mzaini30/zen-js

// Auto hide menu for Bootstrap 3 after click menu item

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

// jQuery contains for case insensitive

$.expr[':'].contains = $.expr.createPseudo(function(arg){
	return function(elem){
		return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
	}
})

// To top

to_top = function(){
	$('html, body').animate({
		scrollTop: 0
	}, 600);
}

// get url parameter

var get_url_parameter = function get_url_parameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};