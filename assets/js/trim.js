window.addEventListener('load', function () {
    var inputTitle = document.querySelector('input#title');
    if(inputTitle) {
        inputTitle.addEventListener("keyup", function(event) {
            var value = this.value;
            var reg = /^(^\w+:|^)\/\//;
            if (reg.test(value)) {
                value = new URL(value).hostname;
                this.value = value.replace(reg, value);
            }
        });
    }

    var additionalInfo = document.querySelector('#additional-info');
    if (additionalInfo) {
        additionalInfo.addEventListener("keyup", function(event) {
            var tavalue = this.value;
            var tareg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
            if (tareg.test(tavalue)) {
                document.querySelector("#direct-link").value = document.querySelector("#additional-info").value;
                this.value = tavalue.replace(tareg, "");
                Swal.fire(
                    'Nie tak szybko kowboju!',
                    'Sam link nie wystarczy, musisz jeszcze podać opis oszustwa.',
                    'error'
                  );
            }
        });
    }
});
