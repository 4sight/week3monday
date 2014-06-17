$("a.titlebar").on("click",function() {
	$(this).next().toggleClass("show"),
	$(".accordion-content").not($(this).next()).removeClass("show")
});