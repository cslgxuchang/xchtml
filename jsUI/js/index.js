$(function(){
	events();
	$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 400
          }
        }
      });
    });
})

function events(){

	$("#dialog").dialog({
		// autoOpen : false,
		// show:{
		// 	effect: "blind",
		// 	duration: 1000
		// },
		// hide:{
		// 	effect:"explode",
		// 	duration:1000
		// }


	}
		

	);

}