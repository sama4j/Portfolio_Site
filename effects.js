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

	($("#items a").first()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});
	($("#items a").first().next()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});
	($("#items a").first().next().next()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});
	($("#items a").first().next().next().next()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().next().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});
	($("#items a").first().next().next().next().next()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").first().next().next().next().next().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});
	($("#items a").last()).mouseenter(function(){
		$("#intro").hide();
		$("#slides div").hide();
		$("#slides div").last().slideDown();
	}).mouseleave(function(){
		$("#slides div").hide();
		$("#intro").show();
	});

	/*$("#items").mouseleave(function(){
		$("#slides").slideUp();
		$("#intro").show();

	});*/

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
