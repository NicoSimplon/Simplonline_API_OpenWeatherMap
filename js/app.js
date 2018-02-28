// afficher la date
moment.locale("fr");
$("#date").text(moment().format('LL'));

//afficher les données météo et la carte (au chargement ce sont les données de Pamiers qui sont chargées)
var ville;

fetch("http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165")
	.then(res => res.json())
	.then(resJson => {
						$("#temp").text(parseInt(resJson.main.temp) + '°'), 
						$("#tempMax").text(resJson.main.temp_max),
						$("#tempMin").text(resJson.main.temp_min),
						$("#presAthmos").text(resJson.main.pressure + ' Pa'),
						$("#humidite").text(resJson.main.humidity),
						$("#vitesseVent").text(resJson.wind.speed + ' km/h'),
						$("#longitude").text(resJson.coord.lon),
						$("#latitude").text(resJson.coord.lat),
						$("#carte").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q=Pamiers&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>")
					})

$("#ville").keypress(function(event){
  if ( event.which == 13 ) {
     event.preventDefault();
  }
});

$("#bouton").click(function(){

	ville = $("#ville").val();

	fetch("http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165")
		.then(res => res.json())
		.then(resJson => {
							$("#temp").text(parseInt(resJson.main.temp) + '°'), 
							$("#tempMax").text(resJson.main.temp_max),
							$("#tempMin").text(resJson.main.temp_min),
							$("#presAthmos").text(resJson.main.pressure + ' Pa'),
							$("#humidite").text(resJson.main.humidity),
							$("#vitesseVent").text(resJson.wind.speed + ' km/h'),
							$("#longitude").text(resJson.coord.lon),
							$("#latitude").text(resJson.coord.lat),
							$("#carte").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>")
						})
});