$(document).ready(function() {
    $('form').submit(function() {
        if ($('input[type="text"]#e-mail').val().length > 0) {
            $('form').attr('action', '/');
            return false;
        }
    });
});
