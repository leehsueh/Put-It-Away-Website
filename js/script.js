/* Author:

*/

$(document).ready(function() {
	var mainContainer = $("#main");
	var headerWrapper = $("#header-container .wrapper");

	headerWrapper.delay(1000).animate({
		opacity:1.0
	}, function() {
		mainContainer.delay(300).animate({
			opacity:1.0
		});
	});
});





