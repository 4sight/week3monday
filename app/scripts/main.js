$(function(){
	$(".accordion").on("click","h1",function(){ 
		$(this).parent().removeClass("hidden").siblings().addClass("hidden")
	})
});