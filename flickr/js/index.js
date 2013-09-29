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


	$(".mainte").hover(function(){
	$(this).css({"background-color":"#0063dc","color":"#fff"});
	
	},function(){
		$(this).css({"background-color":"transparent","color":"#0063dc"});
	});

	$(".cfli a").hover(function(){
		$(this).css({"background-color":"#0063dc","color":"#fff"});
	
	},function(){
		$(this).css({"background-color":"transparent","color":"#0063dc"});
	});

	$("#txtzcj").focus(function(){
	
		$("#txtzcj").val("");
		
	});

	$("#txtzcj").blur(function(){
	
		$(this).val("在Getty Images的 Flickr 珍藏集");
	
		
	});




	var i=0;
	$("#next").click(function(){
		$("#back span").css("background-position","0 0");
		if(i>-680){
		i=i-240;
		 $("#imageli").animate({left:i},1000);
		}else{
			$("#next").css("background-color","transparent");
			$("#next span").css("background-position","0 -51px");
		}
		
	})

	$("#back").click(function(){
		$("#next span").css("background-position","0 -34px");
		if(i<0){
		i=i+240;
		 $("#imageli").animate({left:i},1000);
		}else{
			$("#back").css("background-color","transparent");
			$("#back span").css("background-position","0 -17px");
		}
		
	})
  
}