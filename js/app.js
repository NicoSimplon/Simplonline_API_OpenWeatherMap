// afficher la date
moment.locale("fr");
$("#date").text(moment().format('LL'));

//afficher les données météo et la carte 
var ville = $("#ville").val();

function meteo(ville) {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165",
        dataType: "json",
        success: function(data) {
            $("#temp").text(parseInt(data.main.temp) + '°');
            $("#tempMax").text(data.main.temp_max);
            $("#tempMin").text(data.main.temp_min);
            $("#presAthmos").text(data.main.pressure + ' hPa');
            $("#humidite").text(data.main.humidity);
            $("#vitesseVent").text(data.wind.speed + ' km/h');
            $("#longitude").text(data.coord.lon);
            $("#latitude").text(data.coord.lat);
            $("#carte").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q=" + ville + "&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
        }
    })
}

$(document).ready(function() {
    //Je charge les données de Pamiers (grâce à la value de l'input) lors du chargement de la page
    meteo(ville);
    //En cliquant sur le bouton valider on affiche les données relatives au nom renseigné
    $("#bouton").click(function() {
        ville = $("#ville").val();
        meteo(ville);
    })
    //En appuyant su la touche entrée on peut faire le même affichage
    $("#ville").keypress(function(e) {
        if (e.keyCode == 13) {
            ville = $("#ville").val();
            meteo(ville);
        }
    });
})