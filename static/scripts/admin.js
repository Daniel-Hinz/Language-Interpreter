$(".hamburger").click(function() {
	$(".links").toggleClass("move");
});

$(".link-close").click(function() {
  	$(".links").toggleClass("move");
});

$(".translation-tab").click(function() {
  	$(".text-wrapper").toggleClass("move-text");
});

$(".text-close").click(function() {
	$(".text-wrapper").toggleClass("move-text");
});

function savekey() {
	document.getElementById("generated").action = "/home";
    document.getElementById("generated").submit(); 
}