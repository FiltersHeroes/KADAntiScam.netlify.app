$(document).ready(function() {
    $('form').submit(function() {
        if ($('input[type="text"]#email').val().length > 0) {
            $('#usrform').attr('action', '/');
            return false;
        }
    });
});
