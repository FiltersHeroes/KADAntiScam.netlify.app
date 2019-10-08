$(function() {
    $('input#title').on("keyup", function(event) {
        var value = $(this).val();
        var reg = /^(^\w+:|^)\/\//;
        if (reg.test(value)) {
            $(this).val(value.replace(reg, "").replace(/\/$/, ""));
        }
    })
});
