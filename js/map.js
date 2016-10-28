// GLOBALS: 
var ZOOMLEVEL = 14;
var map;

// POSISJONER:
var BØ_LATLONG 			= [59.41085, 9.07256];
var RINGERRIKE_LATLONG 	= [60.14, 10.25];



// Finner din posisjon
function getLocation() 
{
	if (navigator.geolocation) {
		alert(navigator.geolocation.getCurrentPosition(showPosition) );
	} else { 
		alert("Geolocation is not supported by this browser.");
	}
}

// Henter ut posisjonen. 
function showPosition( position ) 
{
	var latitude = parseFloat(
		JSON.stringify(
			position.coords.latitude
		)
	);
	var longitude = parseFloat(
		JSON.stringify(
			position.coords.longitude
		)
	);

	console.log( latitude+", "+latitude );
	return [latitude, latitude];
}


function placeHotspots( position ) 
{
	// Plasser ut de forskjellige hotspots med
	// denne funskjonen. @elisekrist
}

$(document).ready(function () {
	$("#search").on('submit', function (e) {
		e.preventDefault();

		var address = $('#searchfield').val();
		var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address;

		if (address != "") {
			$.ajax({
				url: url,
				type: "POST",
				data: new FormData(this),
				contentType: false,
				processData: false,
				success: function (data)
				{
					var latitude = parseFloat(
						JSON.stringify(
							data.results[0].geometry.location.lat
						)
					);
					var longitude = parseFloat(
						JSON.stringify(
							data.results[0].geometry.location.lng
						)
					);

					map.panTo( [latitude, longitude] );
					L.marker([latitude, longitude]).addTo(map);
				}
			});
		} else return false;
	});
});


function lookUpAddress( address )
{

	while (address.search(" ") != -1)
	{
		address = address.replace(" ", "+");
	}


}

/** KOMMENTARER OG NOTATER PÅ BRUK AV KART.
	For å endre typen kart hentet: 
		-> 	Endre "layers" nøkkelen sin verdi til en av følgende:
			Grunnkart: 				norges_grunnkart
			Grunnkart, gråtone: 	norges_grunnkart_graatone
			Enkelt kart: 			egk
			Eiendomskart: 			matrikkel_bakgrunn
			Terreng: 				terreng_norgeskart
			Topografisk kart: 		topo2

	Legge til sirkler, polygoner, markører osv:
		->	var marker = L.marker([51.5, -0.09]).addTo(mymap);
		->	var circle = L.circle([51.508, -0.11], {
			    color: 'red',
			    fillColor: '#f03',
			    fillOpacity: 0.5,
			    radius: 500
			}).addTo(mymap);
		-> 	var polygon = L.polygon([
			    [51.509, -0.08],
			    [51.503, -0.06],
			    [51.51, -0.047]
			]).addTo(mymap);
		NOTAT: Man kan legge til en meldingspopup ved å bruke setningen:
			->	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
			->	circle.bindPopup("I am a circle.");

	For å styre hva som skjer når brukeren trykker på ditt kart: 
		->	function onMapClick(e) {
    			alert("You clicked the map at " + e.latlng);
			}
			mymap.on('click', onMapClick);

	Eksempler på alt dette ligger under:	
		->	http://leafletjs.com/examples/quick-start/
		-> 	http://leafletjs.com/reference.html
*/