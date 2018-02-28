// afficher la date
moment.locale("fr");
$("#date").text(moment().format('LL'));

//afficher les données météo
var ville;
var pamiers = "http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165"


fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#temp").text(parseInt(resJson.main.temp) + '°'))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#tempMax").text(resJson.main.temp_max))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#tempMin").text(resJson.main.temp_min))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#presAthmos").text(resJson.main.pressure + ' Pa'))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#humidite").text(resJson.main.humidity))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#vitesseVent").text(resJson.wind.speed + " km/h"))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#longitude").text(resJson.coord.lon))

fetch(pamiers)
	.then(res => res.json())
	.then(resJson => $("#latitude").text(resJson.coord.lat))

$("#submit").click(function(){
	ville = $("#address").val();
	var fech = "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165"

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#temp").text(parseInt(resJson.main.temp) + '°'))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#tempMax").text(resJson.main.temp_max))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#tempMin").text(resJson.main.temp_min))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#presAthmos").text(resJson.main.pressure + ' Pa'))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#humidite").text(resJson.main.humidity))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#longitude").text(resJson.coord.lon))

	fetch(fech)
		.then(res => res.json())
		.then(resJson => $("#latitude").text(resJson.coord.lat))
});

// afficher la carte

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 43.11, lng: 1.61}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            	map: resultsMap,
            	position: results[0].geometry.location
            });
        } 
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
