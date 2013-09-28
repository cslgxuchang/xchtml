$(function(){
	
 events();
 setInterval("add()",1000);

 
})



function  events(){
	$("#titlea").hover(function(){
		
		$("#topdiv1").show();
		$("#topdiv1").css("background-color","#fff");
		$("#titlea a").css("color","#ff0084");
	},function(){

		$("#topdiv1").hide();
		$("#titlea a").css("color","#fff");
	});

	$("#topdiv1 li").hover(function(){
		$("#topdiv1").show();
		$("#topdiv1").css("background-color","#fff");
		$(this).find("a").css("color","#0063dc");
		$(this).css("background-color","#f1f1f1");
		$("#titlea a").css("color","#ff0084");
	},function(){
		$("#topdiv1").hide();
		$("#titlea a").css("color","#fff");
		$(this).find("a").css("color","#373737");
		$(this).css("background-color","#fff");
	});



  
}