/* Author:

*/

$(document).ready(function() {
	var bgOverlay = $('#lbOverlay');
	var updateNote = $('#update-note');
	bgOverlay.css('opacity','0');
	bgOverlay.show().animate({
		opacity:0.6,
	}, 500, function() {
		updateNote.fadeIn(200);
	});
	var closeLink = updateNote.find('a');
	closeLink.click(function(event) {
		event.preventDefault();
		updateNote.fadeOut(200);
		bgOverlay.fadeOut(200);
	});
});





