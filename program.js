let passShow = false;
let toggle = $(".pass");
const box = $(".toggle");
function show() {
	if(passShow === false) {
		toggle.attr("type","text");
		box.addClass("active");
		passShow = true;
	}
	else if (passShow === true) {
		toggle.attr("type","password");
		box.removeClass("active");
		passShow = false;
	}
}
$(".form-txt input").on("focus",function(){
	$(this).addClass("focused");
});
$(".form-txt input").on("blur",function(){
	if($(this).val() == "")
		$(this).removeClass("focused");
});