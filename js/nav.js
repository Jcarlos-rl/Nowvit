$(document).ready(function(){

	var x = window.matchMedia("(max-width: 600px)")

	var flag = false;
	var scroll;

	$(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll > 30){
			if(!flag){
                if(x.matches){
                    $("#logo").css({"margin-top":"1px", "width":"45px"});
                }else{
                    $("#logo").css({"margin-top":"3px", "width":"50px"});
                }
                $(".center1").css({"visibility":"hidden"});

				flag = true;
			}
		}else{
			if(flag){
                if(x.matches){
                    $("#logo").css({"margin-top":"120px", "width":"150px"});
                }else{
                $("#logo").css({"margin-top":"120px", "width":"250px"});
                }
                $(".center1").css({"visibility":"visible"});

				flag = false;
			}
		}
    });
});