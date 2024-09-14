function checkAdblocker() {
    var currentLang = document.documentElement.lang;
    var kad = document.querySelector("#kadetect");
    var kadguard = document.querySelector('#kadguard');
    if ((typeof (kadetect) != 'undefined') && kadetect === true) {
        if (currentLang == "pl") {
            Swal.fire("Bardzo dobrze!", "Masz aktywny uBlock Origin z listą KAD 😊", "success");
        }
        else {
            Swal.fire("Very good!", "You have an active uBlock Origin with KAD filterlist 😊", "success");
        }
    }
    else if (kadguard.offsetHeight == 0) {
        if (currentLang == "pl") {
            Swal.fire("Bardzo dobrze!", "Masz aktywny AdGuard z listą KAD 😊", "success");
        }
        else {
            Swal.fire("Very good!", "You have an active AdGuard with KAD filterlist 😊", "success");
        }
    }
    else if (kad.offsetHeight == 0) {
        if (currentLang == "pl") {
            Swal.fire({
                title: 'Źle!',
                icon: 'warning',
                html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z listą KAD. Do poprawnego działania listy wymagane jest rozszerzenie <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a> lub <a href="https://github.com/AdguardTeam/AdguardBrowserExtension#installation" target="_blank" rel="noopener">AdGuard</a>.'
            });
        }
        else {
            Swal.fire({
                title: 'Wrong!',
                icon: 'warning',
                html: 'It is likely that you have AdBlock/AdBlock Plus active with the KAD filterlist. <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a> or <a href="https://github.com/AdguardTeam/AdguardBrowserExtension#installation" target="_blank" rel="noopener">AdGuard</a> is required for the filterlist to function correctly.'
            });
        }
    }
    else {
        if (currentLang == "pl") {
            Swal.fire({
                title: "Bardzo źle!",
                icon: "error",
                text: 'Nie masz aktywnej listy KAD 😞',
                confirmButtonText: "Subskrybuj KAD",
            });
        }
        else {
            Swal.fire({
                title: "Very bad!",
                icon: "error",
                text: "You don't have an active KAD filterlist 😞",
                confirmButtonText: "Subscribe KAD",
            });
        }
        var swalConfirm = document.querySelector("button.swal2-confirm");
        var aTag = document.createElement('a');
        aTag.innerText = swalConfirm.innerText;
        aTag.classList = swalConfirm.classList;
        aTag.classList.add("btn", "btn-primary");
        aTag.style = swalConfirm.style;
        aTag.href = "abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FFiltersHeroes%2FKAD%2Fmaster%2FKAD.txt&amp;title=KAD";
        aTag.onclick = function () { Swal.close(); };
        swalConfirm.parentNode.replaceChild(aTag, swalConfirm);
    }
}

function submitForm(form) {
    // Thanks for http://marcinmazurek.com.pl/polskie-wulgaryzmy
    let badWords = ['chuj', 'chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
        'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
        'cipie', 'dojebać', 'dojebac', 'dojebie', 'dojebał', 'dojebal',
        'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
        'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
        'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
        'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
        'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
        'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
        'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
        'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
        'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
        'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
        'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
        'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
        'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
        'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
        'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
        'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
        'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
        'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
        'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
        'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
        'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
        'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
        'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
        'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
        'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
        'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
        'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
        'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
        'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
        'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
        'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
        'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
        'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
        'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
        'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
        'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
        'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
        'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
        'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
        'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
        'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
        'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
        'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
        'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
        'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
        'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
        'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
        'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
        'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
        'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
        'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
        'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
        'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
        'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
        'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
        'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
        'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
        'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
        'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
        'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
        'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
        'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
        'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
        'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
        'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
        'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
        'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
        'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
        'przypierdalający', 'przypierdalajacy', 'przypierdolić',
        'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
        'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
        'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
        'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
        'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
        'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
        'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
        'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
        'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
        'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
        'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
        'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
        'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
        'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
        'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
        'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
        'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
        'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
        'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
        'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
        'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
        'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
        'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
        'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
        'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
        'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
        'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
        'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
        'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
        'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
        'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
        'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
        'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
        'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
        'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
        'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
        'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
        'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
        'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
        'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
        'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
        'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
        'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
        'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
        'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
        'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
        'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
        'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
        'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
        'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
        'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
        'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby', 'dupę'];

    let txtInput = document.querySelector('#additionalInfo textarea').value;

    let error = 0;
    for (let i = 0; i < badWords.length; i++) {
        var badWord = badWords[i];
        if ((txtInput.toLowerCase()).indexOf(badWord.toString()) > -1) {
            error = error + 1;
        }
    }

    txtInput.value = txtInput.replace(new RegExp(badWords.join("|"), "gi"), "[beep]");

    let txtSubmit = "Zgłoszenie zostało wysłane na ";
    var currentLang = document.documentElement.lang;
    if (currentLang != "pl") {
        txtSubmit = "The report has been submitted to "
    }

    let banEnd;
    if (document.querySelector('input[type="text"]#email').value.length > 0 || document.cookie.indexOf('ban=') !== -1) {
        return false;
    }
    else if ("submittedTime" in localStorage &&
        new Date().getHours() == new Date(localStorage.getItem("submittedTime")).getHours() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getDate() &&
        new Date().getMonth() == new Date(localStorage.getItem("submittedTime")).getMonth() &&
        new Date().getFullYear() == new Date(localStorage.getItem("submittedTime")).getFullYear() &&
        new Date().getMinutes() - new Date(localStorage.getItem("submittedTime")).getMinutes() < 3) {
        form.setAttribute('action', '/');
        if (currentLang != "pl") {
            Swal.fire("You send out reports too often!", "You must wait at least 3 minutes before sending more 😞", "error");
        }
        else {
            Swal.fire("Zbyt często wysyłasz zgłoszenia!", "Musisz odczekać co najmniej 3 minuty przed wysłaniem kolejnych 😞", "error");
        }
        return false;
    }
    else if (error == 2) {
        if (currentLang != "pl") {
            Swal.fire({ title: "Administrator's judgment", text: "You typed in vulgarities. You may be a troll or have had a bad day, but this is not the best way out of a situation like this. Therefore, you are banned for 2 days 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        }
        else {
            Swal.fire({ title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na 2 dni 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        }
        banEnd = new Date(new Date().getTime() + 24 * 2 * 60 * 60 * 1000);
        document.cookie = "ban=1;" + "expires=" + banEnd + ";SameSite=Strict;";
        localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
    }
    else if (error > 2) {
        if (currentLang == "pl") {
            Swal.fire({ title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na tydzień 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        }
        else {
            Swal.fire({ title: "Administrator's judgment", text: "You typed in vulgarities. You may be a troll or have had a bad day, but this is not the best way out of a situation like this. Therefore, you are banned for 1 week 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        }
        banEnd = new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000);
        document.cookie = "ban=1;" + "expires=" + banEnd + ";SameSite=Strict;";
        localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
    }
    else {
        // const formData = new FormData(form);
        var form_issueTitle = document.querySelector("#usrform #title").value;
        var form_directlink = document.querySelector("#usrform #direct-link").value;
        var form_additionalInfo = document.querySelector("#usrform #additional-info").value;
        var form_nickname = document.querySelector("#usrform #nickname").value;

        var directLink_answer = "";
        if (form_directlink != "") {
            directLink_answer = "### Link bezpośredni do strony zawierającej oszustwo\n ```markdown\n" + form_directlink + "\n\n```\n\n";
        }

        var issueBody = directLink_answer + "### Dodatkowe informacje mogące mieć znaczenie\n" + form_additionalInfo + "\n" + "\n" + "---\n" + `Zgłoszenie opublikowane anonimowo przez użytkownika **${form_nickname}**`;

        const formJsonData = {
            "repo": "KAD",
            "title": form_issueTitle,
            "body": issueBody,
        };

        var formURL = form.getAttribute("data-src");
        fetch(formURL, {
            method: "POST",
            body: JSON.stringify(formJsonData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.text())
            .then((text) => {
                console.log(text);
                if (text.includes("github.com")) {
                    txtSubmit += `<a href="${text}" target="_blank" rel="noopener">${text}</a>.`
                    if (currentLang == "pl") {
                        Swal.fire({ title: "Sukces 😊", html: txtSubmit, icon: "success", confirmButtonText: "Wypełnij nowy formularz" }).then((result) => { if (result.value) { form.reset(); location.reload(); } });
                    }
                    else {
                        Swal.fire({ title: "Success 😊", html: txtSubmit, icon: "success", confirmButtonText: "Fill in a new form" }).then((result) => { if (result.value) { form.reset(); location.reload(); } });
                    }
                    localStorage.setItem("submittedTime", new Date());
                }
                else {
                    if (currentLang == "pl") {
                        Swal.fire({ title: "Porażka 😔", text: "Wystąpił błąd w trakcie wysyłania formularza", icon: "error", confirmButtonText: "Spróbuj ponownie" })
                            .then((result) => { if (result.value) { submitForm(form) } });
                    }
                    else {
                        Swal.fire({ title: "Failure 😔", text: "An error occurred while submitting the form", icon: "error", confirmButtonText: "Try again" })
                            .then((result) => { if (result.value) { submitForm(form) } });
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                if (currentLang == "pl") {
                    Swal.fire({ title: "Porażka 😔", text: "Wystąpił błąd w trakcie wysyłania formularza", icon: "error", confirmButtonText: "Spróbuj ponownie" })
                        .then((result) => { if (result.value) { submitForm(form) } });
                }
                else {
                    Swal.fire({ title: "Failure 😔", text: "An error occurred while submitting the form", icon: "error", confirmButtonText: "Try again" })
                        .then((result) => { if (result.value) { submitForm(form) } });
                }
            });
    }
}

window.addEventListener('load', function () {
    var currentLang = document.documentElement.lang;
    var textAreaToResize = document.querySelectorAll('textarea:not(.gsc-comment-box-textarea)');
    if (textAreaToResize) {
        autosize(textAreaToResize);
    }
    var form = document.querySelector('#usrform');
    if (form) {
        detectIncognito().then(function (result) {
            if (result.isPrivate == true) {
                if (currentLang == "pl") {
                    Swal.fire({
                        title: 'Tryb prywatny/incognito',
                        icon: 'error',
                        text: 'Do poprawnego działania formularza wymagane jest wyjście z trybu prywatnego/incognito.'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Private/incognito mode',
                        icon: 'error',
                        text: 'Exit from private/incognito mode is required for the form to work correctly.'
                    })
                }
            }
        });

        var inputTitle = document.querySelector('input#title');
        if (inputTitle) {
            inputTitle.addEventListener("keyup", function (event) {
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
            additionalInfo.addEventListener("keyup", function (event) {
                var tavalue = this.value;
                var tareg = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
                if (tareg.test(tavalue)) {
                    document.querySelector("#direct-link").value = document.querySelector("#additional-info").value;
                    this.value = tavalue.replace(tareg, "");
                    if (currentLang == "pl") {
                        Swal.fire(
                            'Nie tak szybko kowboju!',
                            'Sam link nie wystarczy, musisz jeszcze podać opis oszustwa.',
                            'error'
                        );
                    }
                    else {
                        Swal.fire(
                            'Not so fast cowboy!',
                            'A link alone is not enough, you still need to provide a description of the scam.',
                            'error'
                        );
                    }
                }
            });
        }

        if (document.cookie.indexOf('ban=') !== -1) {
            if (currentLang == "pl") {
                Swal.fire({
                    title: 'Wyrok administratora',
                    icon: 'error',
                    html:
                        "Jesteś zbanowany do " + localStorage.getItem("banEnd") +
                        ", więc nie możesz wypełniać formularzy 😞. Do końca odsiadki proponuję zagrać np. w " +
                        '<a href="https://store.steampowered.com/app/1048540/Kao_the_Kangaroo_Round_2_2003_rerelease/   ">Kangurka Kao</a> lub ' +
                        '<a href="https://thewitcher.com/pl/witcher3">Wiedźmina 3</a>.',
                });
            }
            else {
                Swal.fire({
                    title: "Administrator's judgment",
                    icon: 'error',
                    html:
                        "You are banned until " + localStorage.getItem("banEnd") +
                        ", so you can't fill out forms 😞.",
                });
            }
            form.remove();
        }
        var validatorDictLocale =
            [
                {
                    key: "required",
                    dict: {
                        en: "This field is required",
                        pl: 'To pole jest wymagane',
                    }
                },
                {
                    key: "email",
                    dict: {
                        en: "Email has invalid format",
                        pl: "Email ma nieprawidłowy format",
                    }
                },
                {
                    key: "maxLength",
                    dict: {
                        en: "This field must contain a maximum of :value characters",
                        pl: "To pole może zawierać maksymalnie tylko :value znaków"
                    }
                },
                {
                    key: "minLength",
                    dict: {
                        en: "This field must contain a minimum of :value characters",
                        pl: "To pole powinno zawierać przynajmniej :value znaków"
                    }
                },
                {
                    key: "number",
                    dict: {
                        en: "Value should be a number",
                        pl: "Wartość powinna być liczbą"
                    }
                },
                {
                    key: "maxNumber",
                    dict: {
                        en: "Number should be less or equal than :value",
                        pl: "Liczba powinna być mniejsza lub równa :value"
                    }
                },
                {
                    key: "minNumber",
                    dict: {
                        en: "Number should be more or equal than :value",
                        pl: "Liczba powinna być większa lub równa :value"
                    }
                },
                {
                    key: "Please check at least one option",
                    dict: {
                        en: "Please check at least one option",
                        pl: "Proszę zaznaczyć przynajmniej jedną opcję"
                    }
                },
                {
                    key: "Please select at least one option",
                    dict: {
                        en: "Please select at least one option",
                        pl: "Proszę wybrać przynajmniej jedną opcję"
                    }
                }
            ]
        var validatorConfig = {
            errorFieldCssClass: 'is-invalid',
            errorLabelCssClass: "invalid-feedback",
            validateBeforeSubmitting: true
        }
        var validate = new window.JustValidate(form, validatorConfig, validatorDictLocale);
        if (currentLang == "pl") {
            validate.setCurrentLocale("pl");
        }
        validate.addField(
            '#title',
            [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 5,
                },
            ]
        );
        validate.addField(
            '#direct-link',
            [
                {
                    rule: 'minLength',
                    value: 12,
                },
            ]
        );
        validate.addField(
            '#additional-info',
            [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 5,
                },
            ]
        );
        validate.addField(
            '#nickname',
            [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 3,
                },
            ]
        );
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            validate.revalidate().then((isValid) => {
                if (isValid) {
                    submitForm(form);
                }
            });
        });
    }
});
