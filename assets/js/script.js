/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function() {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})


// https://varvy.com/pagespeed/defer-images.html

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
		if(imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
		} } }
		window.onload = init;

		function changeValue(elementName, newValue){
			document.getElementsByName(elementName)[0].value=newValue;
		};

// EasyMDE - Markdown editor
var easyMDE = new EasyMDE({
	autoDownloadFontAwesome: false,
	spellChecker: false,
	styleSelectedText: false,
	hideIcons: ["fullscreen", "side-by-side", "heading"],
	status: false,
	showIcons: ["code", "strikethrough"]
});

// Polish translation of EasyMDE
if(document.getElementsByTagName('html')[0].getAttribute('lang')=="pl-PL")
{
	if (document.querySelector('.editor-toolbar')){
		document.querySelector(".editor-toolbar button.bold").setAttribute("title", "Pogrubienie (Ctrl-B)");
		document.querySelector(".editor-toolbar button.italic").setAttribute("title", "Kursywa (Ctrl-I)");
		document.querySelector(".editor-toolbar button.strikethrough").setAttribute("title", "Przekreślenie");
		document.querySelector(".editor-toolbar button.code").setAttribute("title", "Kod (Ctrl-Alt-C)");
		document.querySelector(".editor-toolbar button.quote").setAttribute("title", "Cytat (Ctrl-')");
		document.querySelector(".editor-toolbar button.unordered-list").setAttribute("title", "Lista wypunktowana (Ctrl-L)");
		document.querySelector(".editor-toolbar button.ordered-list").setAttribute("title", "Lista numerowana (Ctrl-Alt-L)");
		document.querySelector(".editor-toolbar button.link").setAttribute("title", "Utwórz link (Ctrl-K)");
		document.querySelector(".editor-toolbar button.image").setAttribute("title", "Wstaw obraz (Ctrl-Alt-I)");
		document.querySelector(".editor-toolbar button.preview").setAttribute("title", "Podgląd (Ctrl-P)");
		document.querySelector(".editor-toolbar button.guide").setAttribute("title", "Poradnik Markdown");
	}
}

