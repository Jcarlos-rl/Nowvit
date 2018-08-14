$(document).ready(function(){

    var x = window.matchMedia("(max-width: 600px)");
    var y = window.matchMedia("(min-width: 1500px)");

	var flag = false;
	var scroll;

	$(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll > 60){
			if(!flag){
                if(x.matches){
                    $("#logo").css({"margin-top":"1px", "width":"45px"});
                }else if(y.matches){
                    $("#logo").css({"margin-top":"3px", "width":"50px"});
                }else{
                    $("#logo").css({"margin-top":"3px", "width":"50px"});
                }
                $("nav").css({"background-color":"#0d1925"});

				flag = true;
			}
		}else{
			if(flag){
                if(x.matches){
                    $("#logo").css({"margin-top":"100px", "width":"200px"});
                }else if(y.matches){
                    $("#logo").css({"margin-top":"200px","width":"350px"});
                }else{
                    $("#logo").css({"margin-top":"130px", "width":"300px"});
                }
                $("nav").css({"background-color":"transparent"});

				flag = false;
			}
		}
    });
});