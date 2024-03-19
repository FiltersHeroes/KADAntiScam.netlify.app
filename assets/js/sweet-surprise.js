window.addEventListener('load', function () {
    if (document.cookie.indexOf('ban=') !== -1) {
        Swal.fire({
            title: 'Wyrok administratora',
            icon: 'error',
            html:
                "Jesteś zbanowany do "+ localStorage.getItem("banEnd")+
                ", więc nie możesz wypełniać formularzy 😞. Do końca odsiadki proponuję zagrać np. w " +
                '<a href="https://store.steampowered.com/app/1048540/Kao_the_Kangaroo_Round_2_2003_rerelease/">Kangurka Kao</a> lub ' +
                '<a href="https://thewitcher.com/pl/witcher3">Wiedźmina 3</a>.',
          });
        document.querySelector("form").remove();
    }

    document.querySelector("form").addEventListener("submit", function() {
        // Thanks for http://marcinmazurek.com.pl/polskie-wulgaryzmy
        let badWords = ['chuj', 'chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
        'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
        'cipie', 'dojebać','dojebac', 'dojebie', 'dojebał', 'dojebal',
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

        let txtInput;
        if(document.querySelector("form").getAttribute('id') == "usrform") {
            txtInput = document.querySelector('#additionalInfo textarea').value;
        }
        else {
            txtInput = document.querySelector("form #message").value;
        }

        let error = 0;
        for (let i = 0; i < badWords.length; i++) {
            var badWord = badWords[i];
            if ((txtInput.toLowerCase()).indexOf(badWord.toString()) > -1) {
                error = error + 1;
            }
        }

        txtInput.value = txtInput.replace(new RegExp(badWords.join("|"), "gi"), "[beep]");

        let txtSubmit;
        if(document.querySelector("form").getAttribute('id') == "usrform") {
            txtSubmit = "Zgłoszenie zostało wysłane na GitHuba.";
        }
        else {
            txtSubmit = "Twój komentarz został przesłany i zostanie opublikowany po zatwierdzeniu.";
        }

        let banEnd;
        if (document.querySelector('input[type="text"]#e-mail').value.length > 0 || document.cookie.indexOf('ban=') !== -1) {
            document.querySelector("form").setAttribute('action', '/');
            return false;
        }
        else if ("submittedTime" in localStorage &&
        new Date().getHours() == new Date(localStorage.getItem("submittedTime")).getHours() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getDate() &&
        new Date().getMonth() == new Date(localStorage.getItem("submittedTime")).getMonth() &&
        new Date().getFullYear() == new Date(localStorage.getItem("submittedTime")).getFullYear() &&
        new Date().getMinutes() - new Date(localStorage.getItem("submittedTime")).getMinutes() < 3) {
                document.querySelector("form").attr('action', '/');
                var elementName;
                if(document.querySelector("form").attr('id') == "usrform") {
                    elementName = "zgłoszenia";
                }
                else {
                    elementName = "komentarze"
                }
                Swal.fire("Zbyt często wysyłasz "+ elementName+ " !", "Musisz odczekać co najmniej 3 minuty przed wysłaniem kolejnych 😞", "error");
                return false;
        }
        else if (error == 1) {
            Swal.fire({title: "Sukces 😊", text: txtSubmit + " Jednakże nieładnie z twojej strony, że wpisałeś wulgaryzm 😞", icon: "warning", confirmButtonText: "Wypełnij nowy formularz"}).then((result)=>{if(result.value){document.querySelector("form").reset();location.reload();}})
        }
        else if (error == 2) {
            Swal.fire({title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na 2 dni 😞", icon: "error", confirmButtonText: "OK"}).then((result)=>{if(result.value){document.querySelector("form").reset();location.reload();}})
            banEnd = new Date(new Date().getTime() + 24 * 2 * 60 * 60 * 1000);
            document.cookie = "ban=1;"+"expires=" + banEnd + ";SameSite=Strict;";
            localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
        }
        else if (error > 2) {
            Swal.fire({title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na tydzień 😞", icon: "error", confirmButtonText: "OK"}).then((result)=>{if(result.value){document.querySelector("form").reset();location.reload();}})
            banEnd = new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000);
            document.cookie = "ban=1;"+"expires=" + banEnd + ";SameSite=Strict;";
            localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
        }
        else {
            Swal.fire({title: "Sukces 😊", text: txtSubmit, icon: "success", confirmButtonText: "Wypełnij nowy formularz"}).then((result)=>{if(result.value){document.querySelector("form").reset();location.reload();}})
        }
    });
});
