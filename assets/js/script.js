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
// var easyMDE = new EasyMDE({
// 	autoDownloadFontAwesome: false,
// 	spellChecker: false,
// 	styleSelectedText: false,
// 	hideIcons: ["fullscreen", "side-by-side", "heading"],
// 	status: false,
// 	showIcons: ["code", "strikethrough"]
// });

// Polish translation of EasyMDE
// if(document.getElementsByTagName('html')[0].getAttribute('lang')=="pl-PL")
// {
// 	if (document.querySelector('.editor-toolbar')){
// 		document.querySelector(".editor-toolbar button.bold").setAttribute("title", "Pogrubienie (Ctrl-B)");
// 		document.querySelector(".editor-toolbar button.italic").setAttribute("title", "Kursywa (Ctrl-I)");
// 		document.querySelector(".editor-toolbar button.strikethrough").setAttribute("title", "Przekreślenie");
// 		document.querySelector(".editor-toolbar button.code").setAttribute("title", "Kod (Ctrl-Alt-C)");
// 		document.querySelector(".editor-toolbar button.quote").setAttribute("title", "Cytat (Ctrl-')");
// 		document.querySelector(".editor-toolbar button.unordered-list").setAttribute("title", "Lista wypunktowana (Ctrl-L)");
// 		document.querySelector(".editor-toolbar button.ordered-list").setAttribute("title", "Lista numerowana (Ctrl-Alt-L)");
// 		document.querySelector(".editor-toolbar button.link").setAttribute("title", "Utwórz link (Ctrl-K)");
// 		document.querySelector(".editor-toolbar button.image").setAttribute("title", "Wstaw obraz (Ctrl-Alt-I)");
// 		document.querySelector(".editor-toolbar button.preview").setAttribute("title", "Podgląd (Ctrl-P)");
// 		document.querySelector(".editor-toolbar button.guide").setAttribute("title", "Poradnik Markdown");
// 	}
// }

function checkAdblocker(){
	var kad = document.querySelector("#kadetect");
	var kadguard = document.querySelector('#kadguard');
	if((typeof(kadetect) != 'undefined') && kadetect === true)
	{
		Swal.fire("Bardzo dobrze!", "Masz aktywny uBlock Origin lub Nano Adblocker z listą KAD 😊", "success");
	}
	else if(kadguard.offsetHeight == 0)
	{
		Swal.fire("Bardzo dobrze!", "Masz aktywny AdGuard z listą KAD 😊", "success");
	}
	else if(kad.offsetHeight == 0)
	{
		Swal.fire({
			title: 'Źle!',
			icon: 'warning',
			html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z listą KAD. Do poprawnego działania listy wymagane jest rozszerzenie <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a>, <a href="https://github.com/NanoAdblocker/NanoCore#install-links" target="_blank" rel="noopener">Nano Adblocker</a> lub <a href="https://github.com/AdguardTeam/AdguardBrowserExtension#installation" target="_blank" rel="noopener">AdGuard</a>.'
		  })
	}
	else
	{
		Swal.fire({
			title: 'Bardzo źle!',
			icon: 'error',
			text: 'Nie masz aktywnej listy KAD 😞'
		  })
		  $("button.swal2-confirm").replaceWith('<a class="swal2-confirm swal2-styled" style="border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);" onclick="Swal.close();" href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FKAD%2Fmaster%2FKAD.txt&amp;title=KAD%20-%20Przekr%C4%99ty">Subskrybuj KAD</a>');
	}
}
