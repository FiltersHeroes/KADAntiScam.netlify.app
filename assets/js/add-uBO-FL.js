function createuBOModal(url) {
    if(localStorage.getItem('showManualSubscribe') !== "false")
    {
        Swal.fire({
            title: 'Ręczna subskrypcja listy filtrów',
            html:
            '<p>Jeśli z jakiegoś powodu nie wyświetlił ci się komunikat z możliwością potwierdzenia subskrypcji, to w miejsce nr 3 wklej adres z listą filtrów.</p><input type="text" id="manualSubscribe" readonly="true" value="'+url+'"><button class="btn btn-transparent" style="margin-left: 10px;" onclick="copyToClipBoard();" title="kopiuj link"><i class="ti-clipboard"></i></button><div class="mt-1"><img class="img-fluid" src="/images/uBO_add1.png" alt="ubo" title="klikamy w przycisk ustawień"><img class="img-fluid" src="/images/uBO_add2.png" alt="ubo-settings" title="aktywujemy zakładkę listy filtrów, przewijamy stronę do końca i wklejamy link z listą do pola na dole, potem klikamy zastosuj"></div>',
            showCloseButton: true,
            showCancelButton: false,
            showDenyButton: true,
            focusConfirm: true,
            grow: 'row',
            customClass: {
                content: 'form-control-meghna',
              },
            confirmButtonText: "Zamknij",
            denyButtonText: "Nie pokazuj więcej tych instrukcji",
        }).then((result) => {
            if (result.isDenied) {
                localStorage.setItem('showManualSubscribe', 'false')
            }
        })
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

function copyToClipBoard() {
    var copyText = document.getElementById("manualSubscribe");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
