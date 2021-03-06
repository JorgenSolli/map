var BUS_ICON = L.icon({
    iconUrl: 'Ikoner/bus_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

var BUS_STOP_ICON = L.icon({
    iconUrl: 'Ikoner/bus_stop_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

var BUS_STOP_CHOSEN_ICON = L.icon({
    iconUrl: 'Ikoner/bus_stop_chosen_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

var BUS_STOP_MARKED_ICON = L.icon({
    iconUrl: 'Ikoner/bus_stop_marked_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

var ACTIVE_HOTSPOT_ICON = L.icon({
    iconUrl: 'Ikoner/active_hotspot_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var ACTIVE_HOTSPOT_MARKED_ICON = L.icon({
    iconUrl: 'Ikoner/active_hotspot_marked_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var ACTIVE_HOTSPOT_CHOSEN_ICON = L.icon({
    iconUrl: 'Ikoner/active_hotspot_chosen_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var INACTIVE_HOTSPOT_ICON = L.icon({
    iconUrl: 'Ikoner/inactive_hotspot_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var INACTIVE_HOTSPOT_MARKED_ICON = L.icon({
    iconUrl: 'Ikoner/inactive_hotspot_marked_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var ME_ICON = L.icon({
    iconUrl: 'Ikoner/me_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var SEARCH_ICON = L.icon({
    iconUrl: 'Ikoner/search_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

var SETTINGS_ICON = L.icon({
    iconUrl: 'Ikoner/settings_icon.png',

    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

function placeIcon(icon, lat, lng){
    var v = L.marker([lat, lng], {icon: icon}).addTo(map).on('click', function(e){
        $(".leaflet-marker-icon").on('click', function (e) {

                var test = $('.leaflet-marker-icon').prop('src');
                console.log(test);
                var path = test.replace("file:///C:/xampp/htdocs/map/", "");
                console.log(path);
                if(path == 'Ikoner/inactive_hotspot_icon.png'){
                    $(this).attr("src", 'Ikoner/active_hotspot_icon.png');
                }
                if (path == 'Ikoner/active_hotspot_icon.png'){
                    $(this).attr("src", 'Ikoner/inactive_hotspot_icon.png');
                }
            });
        });
    return v;
}

function replaceHotspotIcon(icon, lat, lng){

}
/*$document.ready(function(){
    L.marker([lat, lng], {icon: icon}).addTo(map).on('click', function(){
        $(".leaflet-marker-icon").on('click', function (e) {

            var test = $('.leaflet-marker-icon').prop('src');
            console.log(test);
            var path = test.replace("file:///C:/xampp/htdocs/map/", "");
            console.log(path);
            if(path == 'Ikoner/inactive_hotspot_icon.png'){
                $(this).attr("src", 'Ikoner/active_hotspot_icon.png');
            }
            if (path == 'Ikoner/active_hotspot_icon.png'){
                $(this).attr("src", 'Ikoner/inactive_hotspot_icon.png');
            }
        });
    });

});*/


/*function replaceHotspotIcon(icon, lat, lng){
    L.marker([lat, lng], {icon: icon}).addTo(map).on('click', function(){
        $(".leaflet-marker-icon").on('click', function (e) {

            var test = $('.leaflet-marker-icon').prop('src');
            console.log(test);
            var path = test.replace("file:///C:/xampp/htdocs/map/", "");
            console.log(path);
            if(path == 'Ikoner/inactive_hotspot_icon.png'){
                $(this).attr("src", 'Ikoner/inactive_hotspot_marked_icon.png');
            }
            if (path == 'Ikoner/active_hotspot_icon.png'){
                $(this).attr("src", 'Ikoner/active_hotspot_marked_icon.png');
            }
        });
    });
}*/

$(L.icon).click(function(){
    $(L.icon).fadeTo(1000, 0.4);
});

//Hotspot på grivi
placeIcon(INACTIVE_HOTSPOT_ICON, 59.413890, 9.0836602);



placeIcon( ME_ICON, 59.41334977346592, 9.08371925354004);