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
			html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z listą KAD. Do poprawnego działania listy wymagane jest rozszerzenie <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a> lub <a href="https://github.com/AdguardTeam/AdguardBrowserExtension#installation" target="_blank" rel="noopener">AdGuard</a>.'
		  })
	}
	else
	{
		Swal.fire({
			title: "Bardzo źle!",
			icon: "error",
			text: 'Nie masz aktywnej listy KAD 😞',
			confirmButtonText: "Subskrybuj KAD",
		  });
		  var swalConfirm = document.querySelector("button.swal2-confirm");
		  var aTag = document.createElement('a');
		  aTag.innerText = swalConfirm.innerText;
		  aTag.classList = swalConfirm.classList;
		  aTag.classList.add("btn", "btn-primary");
		  aTag.style = swalConfirm.style;
		  aTag.href = "abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FFiltersHeroes%2FKAD%2Fmaster%2FKAD.txt&amp;title=KAD%20-%20Przekr%C4%99ty";
		  aTag.onclick = function() { Swal.close(); };
		  swalConfirm.parentNode.replaceChild(aTag, swalConfirm);
	}
}
