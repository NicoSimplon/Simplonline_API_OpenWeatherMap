// afficher la date
 moment.locale("fr");
 $("#date").text(moment().format('LL'));

//J'empêche le rechargement de la page lors de l'appui sur la touche entrée
$("#ville").keypress(function(event){
  if ( event.which == 13 ) {
     event.preventDefault();
  }
});

//afficher les données météo et la carte (au chargement ce sont les données de Pamiers qui sont chargées)
var ville = $("#ville").val();

function meteo(ville){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165",
		dataType: "jsonp",
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
	meteo(ville);
	$("#bouton").click(function(){
		ville = $("#ville").val();
		meteo(ville);
	})
})