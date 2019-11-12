$(function() {
    $('input#title').on("keyup", function(event) {
        var value = $(this).val();
        var reg = /^(^\w+:|^)\/\//;
        if (reg.test(value)) {
            value = new URL(value).hostname;
            $(this).val(value.replace(reg, value));
        }
    })
});
