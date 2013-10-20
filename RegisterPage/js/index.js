$(function(){
	
 events();
 setInterval("add()",1000);

 
})

function  events(){
	$("#mbs1").click(function(){
		var l=$("#maink").attr("onf");
		if(l=="false"){
			$("#mbs").css("background-position","-360px -432px");
			$("#mbs1").css("color","#fff");
			$("#mbs2").css("color","#555")
			$("#maink").attr("onf","on");
			$("#maink").hide();
			$("#maink1").show();

		}

});
	$("#mbs2").click(function(){
		var l=$("#maink").attr("onf");
		if(l=="on"){
			$("#mbs").css("background-position","0px -432px");
			$("#mbs2").css("color"," #fff");
			$("#mbs1").css("color","#555")
			$("#maink").attr("onf","false");
			$("#maink1").hide();
			$("#maink").show();
		}
		
});
	$(".supt input").mouseover(function(){
	
		$("#mobile").find(".tips").css("color","#555");
	
	})
	$(".supt input").mouseout(function(){
	
		$("#mobile").find(".tips").css("color","#999");
	
	})
	$(".supt input").focus(function(){
	
		$(".supt input").css("border-color","#003399");
	
	})
	$(".supt input").blur(function(){
	
		$(".supt input").css("border-color","#ababab");
	
	})
	
  
}