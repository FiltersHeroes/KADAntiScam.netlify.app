$(document).ready(function() {
    $('form').submit(function() {
        if ($('input[type="text"]#e-mail').val().length > 0) {
            $('form').attr('action', '/');
            return false;
        }
        else if ("submittedTime" in localStorage &&
        new Date().getHours() == new Date(localStorage.getItem("submittedTime")).getHours() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getDate() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getMonth() &&
        new Date().getFullYear() == new Date(localStorage.getItem("submittedTime")).getFullYear() &&
        new Date().getMinutes() - new Date(localStorage.getItem("submittedTime")).getMinutes() < 3) {
                $('form').attr('action', '/');
                Swal.fire("Zbyt często wysyłasz zgłoszenia!", "Musisz odczekać co najmniej 3 minuty przed wysłaniem kolejnego zgłoszenia 😞", "error");
                return false;
        }
        else {
            Swal.fire("Zgłoszenie zostało wysłane na GitHuba!", "Dziękujemy za wypełnienie formularza 😊", "success");
        }
    });
});
