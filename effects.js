$(document).ready(function() {
	/*$("#intro > p:gt(0)").hide();

	setInterval(function() {
		$("#intro > p:first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#intro");
	}, 3000);*/
	playSlides();

	($("#items a").first()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().slideDown();
	});
	($("#items a").first().next()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().slideDown();
	});
	($("#items a").first().next().next()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().slideDown();
	});
	($("#items a").first().next().next().next()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().next().slideDown();
	});
	($("#items a").first().next().next().next().next()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().next().next().slideDown();
	});
	($("#items a").last()).mouseover(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").last().slideDown();
	});

	$("#items").mouseleave(function(){
		$("#slides").slideUp();
		$("#intro").show();

	});

});

var playSlides = function() {
	$("#intro > p:gt(0)").hide();

	setInterval(function() {
		$("#intro > p:first")
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo("#intro");
	}, 3000);
}
