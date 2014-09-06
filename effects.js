$(document).ready(function() {
	$("#slides > div:gt(0)").hide();

	setInterval(function() {
		$("#slides > div:first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#slides");
	}, 3000);

});