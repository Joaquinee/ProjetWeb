

var str = window.location.href;
var res = str.split("?");
var Ar = [
    ["default", [43.673399, 7.218199], [43.674402, 7.221408], "GRETA Côte d'Azur", "7 Avenue des Eucalyptus, 06200 Nice", "04 92 29 40 80" ],
    ["aix", [43.528121, 5.454613], [43.528467, 5.455048], "GRETA Du pays d`Aix", "60 Boulevard Carnot, 13100 Aix-en-Provence", "04 42 21 52 77"],
    ["marseille", [43.273518, 5.424916], [43.273323, 5.426203], "Greta Marseille Méditerranée", "74 Rue Verdillon, 13010 Marseille", "04 91 96 35 30"],
    ["montpellier", [43.610573, 3.891972], [43.610981, 3.890910], "GRETA Montpellier-Littoral", "717 Avenue Jean Mermoz, 34060 Montpellier", "04 67 20 36 00"]

];
if (res[1] === '' || res[1] === undefined) {
    maps(Ar[0][1],Ar[0][2],Ar[0][3], Ar[0][4] ,Ar[0][5]);
}
for (let i = 0; i < Ar.length; i++) {
    if (res[1] === Ar[i][0]) {
        maps(Ar[i][1],Ar[i][2],Ar[i][3],Ar[i][4],Ar[i][5] );
    }
}




/*  Function intMAP */
function maps(location, state, nom, adresse, telephone) {
    var mymap = L.map('mapid').setView(location, 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9hcXVpbmUiLCJhIjoiY2s2cnI2azduMDg1NTNsbXF0c2FrcjdyZCJ9.HDL9DBs1u1Zn--_0WPIC2Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    L.marker(state).addTo(mymap)
        .bindPopup("<b>" + nom + "</b><br>Tel : <b>" + telephone + " </b><br>" + adresse + "").openPopup();
    var popup = L.popup();
}


/* Formulaire vérification */
function checkError() {
    var name = document.getElementsByName('name')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var area = document.getElementsByName('area')[0].value;
    if (name == '' || name == undefined) {
        var element = document.getElementById("grid-first-name");
        element.classList.add("border");
        element.classList.add("border-red-500");
        document.getElementById("errorName").innerHTML = "<small>Merci de remplir ce champs!</small>";
    } else {
        var element = document.getElementById("grid-first-name");
        element.classList.remove("border-red-500");
        document.getElementById("errorName").innerHTML = "";
        var nameV = true;
    }
    if (lastName == '' || lastName == undefined) {
        var element = document.getElementById("grid-last-name");
        element.classList.add("border");
        element.classList.add("border-red-500");
        document.getElementById("errorLastName").innerHTML = "<small>Merci de remplir ce champs!</small>";

    } else {
        var element = document.getElementById("grid-last-name");
        element.classList.remove("border-red-500");
        document.getElementById("errorLastName").innerHTML = "";
        var lastV = true;
    }
    if (!validateEmail(email)) {
        var element = document.getElementById("email");
        element.classList.add("border");
        element.classList.add("border-red-500");
        document.getElementById("errorEmail").innerHTML = "<small>Merci de saisir un email valide !</small>";
    } else {
        var element = document.getElementById("email");
        element.classList.remove("border-red-500");
        document.getElementById("errorEmail").innerHTML = "";
        var emailV = true;
    }
    if (area == '' || area == undefined) {
        var element = document.getElementById("message");
        element.classList.add("border");
        element.classList.add("border-red-500");
        document.getElementById("errorArea").innerHTML = "<small>Merci de remplir ce champs!</small>";

    } else {
        var element = document.getElementById("message");
        element.classList.remove("border-red-500");
        document.getElementById("errorArea").innerHTML = "";
        var areaV = true;
    }
    if (nameV && lastV && emailV && areaV) {
        document.getElementById('form').reset();
        var alert = document.getElementsByName('alert');
        alert[0].hidden = false;
        sleep(3500).then(() => {
            alert[0].hidden = true;
        });
    }

}

/* Check Email */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/* Sleep Script */
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
