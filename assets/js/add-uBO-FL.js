function createuBOModal(url) {
    if(localStorage.getItem('showManualSubscribe') !== "false")
    {
        var clipboardBtn = `{{ partial "assets/button.html" (dict "id" "kadSubClipboardBtn" "color" "info" "icon" "fas fa-clipboard" "outline" true "tooltip" "kopiuj link") }}`;
        Swal.fire({
            title: 'Ręczna subskrypcja listy filtrów',
            html:
            '<p>Jeśli z jakiegoś powodu nie wyświetlił ci się komunikat z możliwością potwierdzenia subskrypcji, to w miejsce nr 3 wklej adres z listą filtrów.</p>'+
            '<div class="d-flex">'+
            '<input type="text" id="manualSubscribe" class="form-control me-2" readonly="true" value="'+url+'"/>'+
            clipboardBtn+
            '</div>'+
            '<div class="mt-4"><img class="img-fluid" src="/images/uBO_add1.png" alt="ubo" title="klikamy w przycisk ustawień"><img class="img-fluid" src="/images/uBO_add2.png" alt="ubo-settings" title="aktywujemy zakładkę listy filtrów, przewijamy stronę do końca i wklejamy link z listą do pola na dole, potem klikamy zastosuj"></div>',
            showCloseButton: true,
            showCancelButton: false,
            showDenyButton: true,
            focusConfirm: true,
            grow: 'row',
            confirmButtonText: "Zamknij",
            denyButtonText: "Nie pokazuj więcej tych instrukcji",
        }).then((result) => {
            if (result.isDenied) {
                localStorage.setItem('showManualSubscribe', 'false')
            }
        })
        document.querySelector("#kadSubClipboardBtn").onclick = function(){copyToClipBoard()};
    }
}

var pafDetect = true;
if((typeof(pafDetect) != 'undefined') && pafDetect === true) {
    let a = document.querySelectorAll("a[href]");
    for(var i in a){
        if(a[i].href && a[i].href.match('^abp:subscribe')) {
            a[i].onclick = function()
            {
                createuBOModal(decodeURIComponent(this.href).replace("abp:subscribe?location=", "").replace(/&(amp;)?title=.*$/,""));
                return false;
            };
        }
    }
}

function copyToClipBoard(element) {
    var copyText = document.querySelector(element);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
	/* Copy the text inside the text field */
	if (typeof navigator.clipboard != undefined) {
		navigator.clipboard.writeText(copyText.value);
	}
	else {
		document.execCommand("copy");
	}
}
