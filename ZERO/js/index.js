$(function(){
	
 events();
 setInterval("add()",1000);

 
})
function  events(){
$("#headimg").click(function(){
	$("#mover").show();	
	$("#uploadimgdiv").show();
});

$("#uploadclose").click(function(){
	$("#mover").hide();
	$("#uploadimgdiv").hide();

})

  

}