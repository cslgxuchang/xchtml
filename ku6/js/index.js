$(function(){
	
 events();
 setInterval("add()",4000);

 
})
/*---------------幻灯片-------------------*/
var i=0;
function add(){
 	$("#simgul li").each(function(){
 	if($(this).attr("on")=="here"){
 		i=$(this).attr("num");
 		
 	}
 	})
  i++;
  if(i!=10){
  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
  	$("#simgul li").css("border-color","#7d7c7e");
  	$("#sim"+i).css("border-color","#539533");
  	$(".dimg").hide();
  	$("#des"+i).show();
  	$("#simgul li").attr("on","where");
  	$("sim"+i).attr("on","here");
  	
  }else{
  	i=0;
  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
  	$("#simgul li").css("border-color","#7d7c7e");
  	$("#sim"+i).css("border-color","#539533");
  	$(".dimg").hide();
  	$("#des"+i).show();
  	$("#simgul li").attr("on","where");
  	$("sim"+i).attr("on","here");
  }
  
 	
 }
  
 /*---------------幻灯片-------------------*/	


function  events(){
	$("#inp").val("请输入查询内容");
	$("#inp").keyup(function(){
		var he=$(this).val();
		$("#inp").attr("value",he);
	})
	$("#inp").focus(function(){
		 var v=$(this).attr("value");

		 if(v=="请输入查询内容"){
		 	$("#inp").val("");
		 }
		
	});
	$("#inp").blur(function(){
		 var fe=$(this).val();
		if(fe==""){
		$("#inp").attr("value","请输入查询内容");
		$("#inp").val("请输入查询内容");
		
		}else{
			$("#inp").attr("value",fe);
		}
		
		
	});

	$("#htnav a").mouseover(function(){
		$("#htnav a").css({
			"color":"#404040",
			"background-image":'none'
		});
		$(this).css({
			"color":"#539533",
			"background-image":'url("css/image/4.gif")'
		});
		
		// $("#htnav a").removeClass("hover");
		// $(this).addClass("hover");
		// $(this).css("color","#539533");
		var l=$(this).attr("txt");
		$(".hotdiv").hide();
		$("#"+l).show();

		
		

	});
	// $("#htnav a").mouseout(function(){
	// 	$(this).css("color","#404040");
	// })

	$("#htna a").mouseover(function(){
		$("#htna a").css({
			"color":"#404040",
			"background-image":'none'
		});
		$(this).css({
			"color":"#539533",
			"background-image":'url("css/image/4.gif")'
		});
		
		var l=$(this).attr("txt");
		$(".hotdiv1").hide();
		$("#"+l).show();


	});
	

	$("#tns2").click(function(){
		var f=$("#set").attr("sopen");
		if(f=="no"){
			$("#set").show();
			$("#set").attr("sopen","yes");
			
			
		}else{
			$("#set").hide();
			$("#set").attr("sopen","no");
		}
		
	});
	$("#set li").click(function(){
			$("#set").hide();
			$("#set").attr("sopen","no");
			var t=$(this).attr("txt");
			$("#tns1").html(t);
			$("#inp").focus();

	})

	$("#simgul li").click(function(){
		var sli=$(this).attr("num");
		$("#bimg").css("background-image",'url("css/image/'+sli+'.jpg")');
  		$("#simgul li").css("border-color","#7d7c7e");
  		$("#sim"+sli).css("border-color","#539533");
  		$(".dimg").hide();
  		$("#des"+sli).show();
  		$("#simgul li").attr("on","where");
  		$(this).attr("on","here");
	});
	$("#ndiv").click(function(){
		$("#simgul li").each(function(){
 			if($(this).attr("on")=="here"){
 			i=$(this).attr("num");
		 		
		 	}
 		})
  		i++;
		  if(i!=10){
		  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
		  	$("#simgul li").css("border-color","#7d7c7e");
		  	$("#sim"+i).css("border-color","#539533");
		  	$(".dimg").hide();
		  	$("#des"+i).show();
		  	$("#simgul li").attr("on","where");
		  	$("sim"+i).attr("on","here");
		  	
		  }else{
		  	i=0;
		  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
		  	$("#simgul li").css("border-color","#7d7c7e");
		  	$("#sim"+i).css("border-color","#539533");
		  	$(".dimg").hide();
		  	$("#des"+i).show();
		  	$("#simgul li").attr("on","where");
		  	$("sim"+i).attr("on","here");
		  }
		  


	});


		$("#simgul li").click(function(){
		var sli=$(this).attr("num");
		$("#bimg").css("background-image",'url("css/image/'+sli+'.jpg")');
  		$("#simgul li").css("border-color","#7d7c7e");
  		$("#sim"+sli).css("border-color","#539533");
  		$(".dimg").hide();
  		$("#des"+sli).show();
  		$("#simgul li").attr("on","where");
  		$(this).attr("on","here");
	});
	$("#bdiv").click(function(){
		$("#simgul li").each(function(){
 			if($(this).attr("on")=="here"){
 			i=$(this).attr("num");
		 		
		 	}
 		})
  		i--;
		  if(i!=0){
		  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
		  	$("#simgul li").css("border-color","#7d7c7e");
		  	$("#sim"+i).css("border-color","#539533");
		  	$(".dimg").hide();
		  	$("#des"+i).show();
		  	$("#simgul li").attr("on","where");
		  	$("sim"+i).attr("on","here");
		  	
		  }else{
		  	i=9;
		  	$("#bimg").css("background-image",'url("css/image/'+i+'.jpg")');
		  	$("#simgul li").css("border-color","#7d7c7e");
		  	$("#sim"+i).css("border-color","#539533");
		  	$(".dimg").hide();
		  	$("#des"+i).show();
		  	$("#simgul li").attr("on","where");
		  	$("sim"+i).attr("on","here");
		  }
		  


	});




  
}