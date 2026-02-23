

var navbar = document.querySelector("#navbar");
navbar.innerHTML = `
<div class="nav-container">
	<div class="logo-container">
		<a class="zenithsoft-logo" href="index.html">
			<img class="logo-image" src="../images/logo.png" alt="CELESTIAL125">
		</a>
	</div>
	<div class="nav-right">
		<div id="menu_btn" class="menu-button sf-hidden" aria-label="導航菜單">
			<span></span><span></span><span></span>
		</div>
		<div id="nav_links" class="nav-links">
			<a class="nav-link" href="web.html">網頁開發</a>
			<a class="nav-link" href="app.html">APP開發</a>
			<a class="nav-link" href="system.html">系統開發</a>
			<a class="nav-link" href="seo.html">SEO/SEM</a>
			<a class="nav-link" href="about.html">關於我們</a>
			<a class="nav-link contact-link" href="contact.html">聯絡我們</a>
		</div>
	</div>
</div>
`;

var menu_btn = document.querySelector("#menu_btn");
var nav_links = document.querySelector("#nav_links");
menu_btn.onclick = function () {
	menu_btn.classList.toggle("active");
	nav_links.classList.toggle("active");
}