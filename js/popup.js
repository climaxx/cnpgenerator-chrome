$(document).ready(function() {

    // $("a#genCnp").click(function() {
    //     $("#bodycontainer").append("xaxa");
    // });

    $("#btnGenerate").click(function() {

        var sex = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        var an = Math.floor(Math.random() * (99 - 14 + 1)) + 14;
        var luna = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var ziua = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
        var judet = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
        var nnn = Math.floor(Math.random() * (999 - 1 + 1)) + 1;

        if (luna < 10) luna = "0" + luna;
        if (ziua < 10) ziua = "0" + ziua;
        if (judet < 10) judet = "0" + judet; //adaugare un 0 in fata daca numarul este mai mic decat 10
        if (nnn < 10) nnn = "00" + nnn;
        if (nnn < 100 && nnn > 10) nnn = "0" + nnn;

        var cnp_i = sex + "" + an + "" + luna + "" + ziua + "" + judet + "" + nnn; //concatenarea datelor
        var cnp_f = cnp_i.replace(/ /g, ''); //eliminarea spatiilor 

        //calcularea cifrei de control
        var cnp = cnp_i.split('');
        var cifra = ["2", "7", "9", "1", "4", "6", "3", "5", "8", "2", "7", "9"];
        suma = 0;
        for (i = 0; i < 12; i++) {
            if (isNaN(cnp[i]) == false) //verificarea daca cnp-ul generat pana acum este format doar din numere
                suma += (cifra[i] * cnp[i]); //calcularea sumei de control
        }
        var rest = suma % 11;
        if (rest == 10)
            var cifra_control = 1;
        else
            var cifra_control = rest;
        var cnp_final = cnp_f.concat(cifra_control); //concatenarea cifrei de control la restul cnp-ului

        dt1 = new Date(an, luna, ziua);
        dt2 = new Date();

        function diff_years(dt2, dt1) {

            var diff = (dt2.getTime() - dt1.getTime()) / 1000;
            diff /= (60 * 60 * 24);
            return Math.abs(Math.round(diff / 365.25));

        }


        $("#cnpgenerat").text("CNP generat: " + cnp_final);
        $("#cnpgenp").text(cnp_final);
        $("#dobgenp").text(ziua + "/" + luna + "/" + "19" + an);
        if (sex == "1") $("#sexgenp").text("Masculin");
        if (sex == "3") $("#sexgenp").text("Masculin");
        if (sex == "5") $("#sexgenp").text("Masculin");
        if (sex == "7") $("#sexgenp").text("Masculin");
        if (sex == "2") $("#sexgenp").text("Feminin");
        if (sex == "4") $("#sexgenp").text("Feminin");
        if (sex == "6") $("#sexgenp").text("Feminin");
        if (sex == "8") $("#sexgenp").text("Feminin");
        $("#agegenp").text(diff_years(dt1, dt2));

        if (judet == "01") $("#judgenp").text("Alba");
        if (judet == "02") $("#judgenp").text("Arad");
        if (judet == "03") $("#judgenp").text("Argeș");
        if (judet == "04") $("#judgenp").text("Bacău");
        if (judet == "05") $("#judgenp").text("Bihor");
        if (judet == "06") $("#judgenp").text("Bistrița-Năsăud");
        if (judet == "07") $("#judgenp").text("Botoșani");
        if (judet == "08") $("#judgenp").text("Brașov");
        if (judet == "09") $("#judgenp").text("Brăila");
        if (judet == "10") $("#judgenp").text("Buzău");
        if (judet == "11") $("#judgenp").text("Caraș-Severin");
        if (judet == "12") $("#judgenp").text("Cluj");
        if (judet == "13") $("#judgenp").text("Constanța");
        if (judet == "14") $("#judgenp").text("Covasna");
        if (judet == "15") $("#judgenp").text("Dâmbovița");
        if (judet == "16") $("#judgenp").text("Dolj");
        if (judet == "17") $("#judgenp").text("Galați");
        if (judet == "18") $("#judgenp").text("Gorj");
        if (judet == "19") $("#judgenp").text("Harghita");
        if (judet == "20") $("#judgenp").text("Hunedoara");
        if (judet == "21") $("#judgenp").text("Ialomița");
        if (judet == "22") $("#judgenp").text("Iași");
        if (judet == "23") $("#judgenp").text("Ilfov");
        if (judet == "24") $("#judgenp").text("Maramureș");
        if (judet == "25") $("#judgenp").text("Mehedinți");
        if (judet == "26") $("#judgenp").text("Mureș");
        if (judet == "27") $("#judgenp").text("Neamț");
        if (judet == "28") $("#judgenp").text("Olt");
        if (judet == "29") $("#judgenp").text("Prahova");
        if (judet == "30") $("#judgenp").text("Satu Mare");
        if (judet == "31") $("#judgenp").text("Sălaj");
        if (judet == "32") $("#judgenp").text("Sibiu");
        if (judet == "33") $("#judgenp").text("Suceava");
        if (judet == "34") $("#judgenp").text("Teleorman");
        if (judet == "35") $("#judgenp").text("Timiș");
        if (judet == "36") $("#judgenp").text("Tulcea");
        if (judet == "37") $("#judgenp").text("Vaslui");
        if (judet == "38") $("#judgenp").text("Vâlcea");
        if (judet == "39") $("#judgenp").text("Vrancea");
        if (judet == "40") $("#judgenp").text("București");
        if (judet == "41") $("#judgenp").text("București - Sector 1");
        if (judet == "42") $("#judgenp").text("București - Sector 2");
        if (judet == "43") $("#judgenp").text("București - Sector 3");
        if (judet == "44") $("#judgenp").text("București - Sector 4");
        if (judet == "45") $("#judgenp").text("București - Sector 5");
        if (judet == "46") $("#judgenp").text("București - Sector 6");
        if (judet == "51") $("#judgenp").text("Călărași");
        if (judet == "52") $("#judgenp").text("Giurgiu");

        $("#nrreggenp").text(nnn);


    });


});