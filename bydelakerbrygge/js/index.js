$(function(){
	
 events();
 
})


function  events(){
	$("#topmenu a").hover(function(){
		
		 $(this).css("background-image",'url("css/image/divider.png")');
	},function(){
		 $(this).css("background-image","none");
	});

$("#ctimg").hover(function(){
		
		 $("#bumimg").css("background-image",'url("css/image/divider.png")');
	    },function(){
		 $("#bumimg").css(
		 	"background-image","none");
	});

  
}