var menu_btn = document.querySelector("#menu_btn");
var nav_links = document.querySelector("#nav_links");
menu_btn.onclick = function () {
	menu_btn.classList.toggle("active");
	nav_links.classList.toggle("active");
}