// afficher la date
moment.locale("fr");
$("#date").text(moment().format('LL'));

//afficher les données météo

$("#bouton").click(function(){
	var ville = $("#ville").val();

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#temp").text(parseInt(resJson.main.temp) + '°'))

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#tempMax").text(resJson.main.temp_max))

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#tempMin").text(resJson.main.temp_min))

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#presAthmos").text(resJson.main.pressure + ' Pa'))

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#humidite").text(resJson.main.humidity))

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ ville +'&units=metric&lang=fr&appid=1ad29eaefcd945e4f49ae28974ac9165')
		.then(res => res.json())
		.then(resJson => $("#vitesseVent").text(resJson.wind.speed + " km/h"))

});