$(function(){
 events();
 inposition();

   tab();
  $("#dialog").dialog();


})


function tab(){
  $("#xinwen").tabs();
  $("#frm").draggable({
    containment : "#content", 

  });
}





function inposition(){
$.each($(".tbmenu"),function(i){
	$(this).css("left",i=105+"px");
});

}  
function events(){
 $(".sptest").hover(function(){
var spt=$(".sptest").attr("txtmsg");

  $(".sptest").append('<div class="spdiv">'+spt+'</div>');
 },function(){
  $(".spdiv").remove();

  }
 )











	$(".tbmenu").mouseover(function(){
   	    $(this).find("dt").addClass("dtover");
   	    $(this).find("dd").show();

   	 });

	$(".tbmenu").mouseout(function(){
   	   $(this).find("dt").removeClass("dtover");
   	    $(this).find("dd").hide();

   	 });
	$("#txt").keyup(function(){
		var v=$("#txt").val();
		if(v.length==""){

			$(this).css("background-image",'url("css/image/searching.png")');
		}else{

			$(this).css({"background-image":"none"});
		}
		
	});
	$("#btn").hover(function(
		){
		$("#xllm").css("display","block");

	},function(){

		$("#xllm").css("display","none");
	});
   	   
     $("#go").click(function(){
   	     var  vg=$("#go").attr("divopen");

   	   	if(vg=="no"){
   	   		 $("#sli").animate({right:0},500,function(){
   	   			$("#go").css({"background-image":'url("css/image/jiantou1.png")',"background-color":"#aaa"});
   	   			$("#go").attr("divopen","yes");
   	   		});
     		  /*$("#sli").css("right","0");
     			$("#go").css({"background-image":'url("css/image/jiantou1.png")',"background-color":"#aaa"});
   	   		   $("#go").attr("divopen","yes");*/
   	   	}
   	   	else{
   	   			 $("#sli").animate({right:-230},500,function(){
   	   			 $("#go").css({"background-image":'url("css/image/tupiao2.png")',"background-color":"#aaa"});
   	   			$("#go").attr("divopen","no")
   	   		});

   	   	// 	$("#sli").css("right","-230");
     			// $("#go").css({"background-image":'url("css/image/tupiao2.png")',"background-color":"#aaa"});
     			// $("#go").attr("divopen","no");
   	   	}
 });
  }