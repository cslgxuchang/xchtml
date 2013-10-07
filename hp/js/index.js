$(function(){
	
 events();
 setInterval("add()",1000);

 
})
// var i=0;
//  function add(){
//  	$(".select").css("background-color","#ccc");
//   i++;
//   if(i!=6){
//   	$("#cimg").css("background-image",'url("css/image/'+i+'.jpg")');
//   	$(".select").each(function(){
//   		if (i==$(this).attr("txt")){
//   			$(this).css("background-color","#f08200");
//   		};

//   	})
//   }else{
//   	i=1;
//  	$("#cimg").css("background-image",'url("css/image/'+i+'.jpg")');
//   	$(".select").first().css("background-color","#f08200");
//   }
  
 	


function  events(){
	$("#hcrinp").focus(function(){
		$("#hcrinp").val("");
	});
	$("#hcrinp").blur(function(){
		$("#hcrinp").val("搜索");
	});

	$(".ccd").hover(function(){
		 var l=$(this).attr("txt");
		 if (l=="off") {
			$(this).css("background-color","#006699");
		 };
	},function(){
		var l=$(this).attr("txt");
		if (l=="off") {
		$(this).css("background-color","#e5e8e8");
		}
	});

	$("#ccdiv1").click(function(){
		$(".ccd").css("background-color","#e5e8e8");
		$("#ccdiv1").css("background-color","#0096D6")
		$(".ccd").attr("txt","off");
		$("#ccdiv1").attr("txt","on");
		$("#holder1").show();
		$("#holder2").hide();
		$("#holder3").hide();
	});
	

	$("#ccdiv2").click(function(){
		$(".ccd").css("background-color","#e5e8e8");
		$("#ccdiv2").css("background-color","#0096D6")
		$(".ccd").attr("txt","off");
		$("#ccdiv2").attr("txt","on");
		$("#holder2").show();
		$("#holder1").hide();
		$("#holder3").hide();

	});

	$("#ccdiv3").click(function(){
		$(".ccd").css("background-color","#e5e8e8");
		$("#ccdiv3").css("background-color","#0096D6")
		$(".ccd").attr("txt","off");
		$("#ccdiv3").attr("txt","on");
		$("#holder3").show();
		$("#holder2").hide();
		$("#holder1").hide();

	});

	var i;
	$("#next").click(function(){
		$(".ccd").each(function(){
		if($(this).attr("txt")!="off"){
			i=$(this).attr("num");
			
			}
		});
		if(i!=3){
			i++;
			$(".ccd").attr("txt","off");
		    $("#ccdiv"+i).attr("txt","on");
			$(".ccd").css("background-color","#e5e8e8");
		    $("#ccdiv"+i).css("background-color","#0096D6")
			$(".holder").hide();
			$("#holder"+i).show();

		}
	});

	$("#back").click(function(){
		if(i!=1){
			i--;
			$(".ccd").attr("txt","off");
		    $("#ccdiv"+i).attr("txt","on");
			$(".ccd").css("background-color","#e5e8e8");
		    $("#ccdiv"+i).css("background-color","#0096D6")
			$(".holder").hide();
			$("#holder"+i).show();

		}
	});

	$("#hcli1").hover(function(){
		$("#hcdiv1").show();
	},function(){
		$("#hcdiv1").hide();
	});

	$("#hcdiv1").hover(function(){
	$("#hcdiv1").show();
	},function(){
		$("#hcdiv1").hide();
	})

	$("#hcdiv1 ul li").hover(function(){
		$(this).css("background-color","#0096D6");
	},function(){
		$(this).css("background-color","#fff");
	})
  
}