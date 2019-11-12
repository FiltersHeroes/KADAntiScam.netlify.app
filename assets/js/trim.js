$(function() {
    $('input#title').on("keyup", function(event) {
        var value = $(this).val();
        var reg = /^(^\w+:|^)\/\//;
        if (reg.test(value)) {
            value = new URL(value).hostname;
            $(this).val(value.replace(reg, value));
        }
    })
    $('#additional-info').one("keyup", function(event) {
        var tavalue = $(this).val();
        var tareg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        if (tareg.test(tavalue)) {
            document.querySelector("#direct-link").value = document.querySelector("#additional-info").value;
            $(this).val(tavalue.replace(tareg, ""));
            Swal.fire(
                'Nie tak szybko kowboju!',
                'Sam link nie wystarczy, musisz jeszcze podać opis oszustwa.',
                'error'
              );
        }
    })
});
