$(function(){
	
 events();
 setInterval("add()",1000);

 
})

  
 	


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

  
}