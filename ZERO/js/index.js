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
//   	$("#cimg").css("background-image",'url("css/image/'+i+'.jpg")');
//   	$(".select").first().css("background-color","#f08200");
//   }
  
 	
 }

function  events(){
	// $(window).scroll(function(){ 

	// 	if($(this).scrollTop()>72){

	// 	$("#headtd").css("top",($(this).scrollTop()) + "px");

	// 	} else{
	// 		$("#headtd").css("top","72px");
	// 	}
	// } );
 //   $(window).scroll(function(){ 

	// 	if($(this).scrollTop()>130){

	// 	$("#back").show();
	// 	$("#back").css("top",($(this).scrollTop()-40) + "px")

	// 	} else{
	// 		$("#back").hide();
	// 		// $("#back").css("position","absolute")
	// 	}
	// } );


 //   $("#backa").click(function(){
 //     $("html,body").animate({scrollTop:0},2000);
 //   });


	// $("#tubiao").hover(function(){
	// 	$("#over").show();
	// },function(){
	// 	$("#over").hide();
	// })


	// $(".select").click(function(){
	// 	var curindex=$(this).attr("txt");
	// 	$(".select").css("background-color","#ccc");
	// 	$("#cimg").css("background-image",'url("css/image/'+curindex+'.jpg")');
	// 	$(this).css("background-color","#f08200");

	// })
  
}