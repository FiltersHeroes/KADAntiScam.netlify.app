$(document).ready(function(){
    autosize($('textarea'));
    if($('#usrform')) {
        $('#usrform').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSdHY8a2G3f9hLv-gar86DYdlf6gsnI6E10Vlh2x-IQpkOE25A/formResponse');
    }
    if ($('#commentsform')) {
        $('#commentsform').attr('action', $('#commentsform').data("action"));
        $('#commentsform').removeAttr("data-action");
    }
});
