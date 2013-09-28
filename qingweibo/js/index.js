  $(function(){
   events();
    setInterval("move()",300);

  })
  var i=0;
  function move(){
       if(i>-1180){
        i=i-50;
         $(".slideul1").animate({left:i},1000);
      }else{

        $(".slideul1").css("float","right");
          i=0;
        $(".slideul1").animate({left:i},1000);
      };
   }
  function events(){

      $("input").val("");

      $("#email").focus(function(){
   $("#email").css({"background-image":"none","border-color":"#2982ff"});
   
    });

      $("#email").keyup(function(){
      var v=$("#email").val();
      
      if (v.length!="") {
        $("#diveml").show();
      $("#emlcontent li").each(function(){
          var l=$(this).attr("txt");
          $(this).text(v+l);
          })

    
   }else{
            $("#diveml").hide();
   }
  })


  $("#li1,#li2,#li3,#li4,#li5,#li6").hover(function(){

    $(this).css("background-color","#9ac2d4");
    

  },function(){
    $("#emlcontent li").css("background-color","#fff");
  })




      $("#email").blur(function(){
      $("#diveml").hide();
      var v=$("#email").val();
      if(v.length==""){

        $(this).css({"background-image":'url("css/image/loginipt_bg.png")',"border-color":"#9ac2d4"});

      }else{

        $(this).css({"background-image":"none"});

      }
  })







      $("#password").focus(function(){

      $("#password").css({"background-image":"none","border-color":"#2982ff"});
      })
       $("#password").blur(function(){
      var v=$("#password").val();
      if(v.length==""){

       $(this).css({"background-image":'url("css/image/loginipt_bg.png")',"border-color":"#9ac2d4"});
      }else{

        $(this).css({"background-image":"none"});
      }
  })   
     $("#btnsp1").mouseover(function(){
        	$("#btnsp1").css({"background-position":"0px -168px"})
        	$("#btnsp2").css({"background-position":"-34px -252px"})
        })
     $("#btnsp1").mouseout(function(){
        	$("#btnsp1").css({"background-position":"0px 0px"})
        	$("#btnsp2").css({"background-position":"-34px -84px"})
        })
 
    }










  function mouseover(){
  	var em=document.getElementById("email");
  	em.style.borderColor= "#2982ff";
    }
    function mouseout(){
  	var em=document.getElementById("email");
  	em.style.borderColor= "#9ac2d4";
   }
    function mouseover1(){
  	var pwd=document.getElementById("password");
  	pwd.style.borderColor= "#2982ff";
    }
    function mouseout1(){
  	var pwd=document.getElementById("password");
  	pwd.style.borderColor= "#9ac2d4";
   }
    