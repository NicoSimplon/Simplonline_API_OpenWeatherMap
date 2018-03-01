// afficher la date
 moment.locale("fr");
 $("#date").text(moment().format('LL'));

//afficher les données météo et la carte (au chargement ce sont les données de Pamiers qui sont chargées)
var ville = $("#ville").val();

function meteo(ville){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165",
		dataType: "json",
		success: function(data){
            $("#temp").text(parseInt(data.main.temp) + '°');
			$("#tempMax").text(data.main.temp_max);
			$("#tempMin").text(data.main.temp_min);
			$("#presAthmos").text(data.main.pressure + ' hPa');
			$("#humidite").text(data.main.humidity);
			$("#vitesseVent").text(data.wind.speed + ' km/h');
			$("#longitude").text(data.coord.lon);
			$("#latitude").text(data.coord.lat);
			$("#carte").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
		}
	})
}

$(document).ready(function(){
	//Je charge les données de Pamiers (grâce à la value de l'input) lors du chargement de la page
	meteo(ville);
	//Je valide l'envoie du formlaire en appuyant sur le bouton valider
	$("#bouton").click(function(){
		ville = $("#ville").val();
		meteo(ville);
	})
	//Je valide l'envoie du formulaire grâce à la pression de la touche entrée
	$("#ville").keypress(function(e){
	  	if ( e.keyCode == 13 ) {
			ville = $("#ville").val();
			meteo(ville);
	  	}
	});
})