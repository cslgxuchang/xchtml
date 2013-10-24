$(function(){
 events();

});
function  events(){
	$(".interest").hover(function(){
		$(this).css("background-color","#fff");
	},function(){
		$(this).css("background-color","#f8f8f8");
	});

	$(".interest").click(function(){

		$(".interest").removeClass("clickon");
		$(this).addClass("clickon");
	});
}
