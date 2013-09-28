$(function(){
	
 events();
 
})


function  events(){

	$("#txtsearch").val("");

	$("#txtsearch").keyup(function(){
		var v=$("#txtsearch").val();
		if(v.length==""){
		$(this).css({
			"background-image":'url("css/image/google_custom_search_watermark.gif")',
	         "background-position" : "-46px 0"
		});
		}else{

			$(this).css({"background-image":"none"});
		}
		
	});
	$("#mcul li").hover(function(){
		$(this).css({"background-image":'url("css/image/123.png")',"background-position": "-2px 0"})
	},function(){
		$(this).css("background-image","none")
	})

	


	$("#mr1").hover(function(){
		$(this).css("background-position","0px 100px")
	},function(){
		$(this).css("background-position","0px 0px")
	})

	$("#mr2").hover(function(){
		$(this).css("background-position","0px 100px")
	},function(){
		$(this).css("background-position","0px 0px")
	})

	$("#mr3").hover(function(){
		$(this).css("background-position","0px 100px")
		},function(){
			$(this).css("background-position","0px 0px")
		})

	$("#mr4").hover(function(){
		$(this).css("background-position","0px 100px")
	},function(){
		$(this).css("background-position","0px 0px")
	})



	$("#footer li").hover(function(){
		$(this).css("background-color","#68645b")
	},function(){
		$(this).css("background-color","#504D46")
	})
   
	$("#back").click(function(){
		var curindex=$("#mainimg").attr("txt");
		
			
		 if(curindex!=1){
			curindex=curindex-1;
			$("#mainimg").css("background-image",'url("css/image/'+curindex+'.jpg")')
			$("#mainimg").attr("txt",curindex)
		}else{
			curindex=5;
		 	$("#mainimg").css("background-image",'url("css/image/'+curindex+'.jpg")')
		 	$("#mainimg").attr("txt","5")

		 }
	})
	$("#next").click(function(){
		var curindex=$("#mainimg").attr("txt");
		
			
		 if(curindex!=5){
		 
			curindex++;
			
			$("#mainimg").css("background-image",'url("css/image/'+curindex+'.jpg")')
			$("#mainimg").attr("txt",curindex)
		}else{
			curindex=1;
		 	$("#mainimg").css("background-image",'url("css/image/'+curindex+'.jpg")')
		 	$("#mainimg").attr("txt","1")

		 }
	})

  
};