"use strict";
var map, infowindow;


//initialize the map
function initialize() {
    var mapDiv = document.getElementById('google-maps');
    map = new google.maps.Map(mapDiv, {
        center: {
            lat: 37.41508,
            lng: -121.95608
        },
        zoom: 11
    });
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
    setMarkers(markers);
}

// set the markers of all locations on the map
function setMarkers(places) {
    var i;
    infowindow = new google.maps.InfoWindow();
    for (i = 0; i < places.length; i++) {
        places[i].holdmarker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
            map: map,
            animation: google.maps.Animation.DROP,
            title: markers[i].title,
            clickable: true
        });

        //this is to add a click event handler for click the marker and show info window
        google.maps.event.addListener(places[i].holdmarker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<img src="http://maps.googleapis.com/maps/api/streetview?' +
                    'size=200x150&location=' + places[i].streetAddress + ', ' + places[i].cityAddress +
                    '" alt="Street View Image of ' + places[i].title + '"><br><hr style="margin-bottom: 5px"><strong>' +
                    places[i].title + '</strong><br><p>' +
                    places[i].streetAddress + '<br>' +
                    places[i].cityAddress + '<br></p><a class="web-links" href="http://' + places[i].url +
                    '" target="_blank">' + places[i].url + '</a>');
                infowindow.open(map, places[i].holdmarker);
                markers[i].holdmarker.setAnimation(google.maps.Animation.BOUNCE);
                map.panTo(markers[i].holdmarker.getPosition());
                map.setZoom(16);
                setTimeout(function() {
                    markers[i].holdmarker.setAnimation(null);
                }, 700);
            };
        })(marker, i));

        //this is to add a click event lisentner to the search result text----not used
        /*$('#search_result').on('click', '#nav' + i, (function(marker, i) {
            return function() {
            	google.maps.event.trigger(markers[i].holdmarker,'click');
            }
        })(marker, i));*/
    }


}


//reset map and redraw markers and infowindows according to the status of display attribute in the markers json file
function resetMap() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].display === true) {
            markers[i].holdmarker.setMap(map);
        } else {
            markers[i].holdmarker.setMap(null);
        }
    }
}

//All locations info are in json format
var markers = [{
    title: "Panda Express",
    lat: 37.41600,
    lng: -121.95465,
    streetAddress: "4180 N 1st St",
    cityAddress: "San Jose, CA",
    url: "https://www.pandaexpress.com/",
    display: true,
    visible: ko.observable(true),
    id: "nav0"
}, {
    title: "Chick-fil-A",
    lat: 37.41574,
    lng: -121.95351,
    streetAddress: "53 Headquarters Dr",
    cityAddress: "San Jose, CA",
    url: "http://www.chick-fil-a.com/firststreet",
    display: true,
    visible: ko.observable(true),
    id: "nav1"
}, {
    title: "Ericsson Inc",
    lat: 37.41830,
    lng: -121.94828,
    streetAddress: "250 Holger Way",
    cityAddress: "San Jose, CA",
    url: "http://www.ericsson.com/",
    display: true,
    visible: ko.observable(true),
    id: "nav2"
}, {
    title: "99 Ranch Market",
    lat: 37.42282,
    lng: -121.91681,
    streetAddress: "338 Barber Ln",
    cityAddress: "Milpitas, CA",
    url: "http://www.99ranch.com",
    display: true,
    visible: ko.observable(true),
    id: "nav3"
}, {
    title: "CBI kitchen",
    lat: 37.42368,
    lng: -121.91739,
    streetAddress: "290 Barber Ct",
    cityAddress: "Milpitas, CA",
    url: "http://www.cbikitchen.com/",
    display: true,
    visible: ko.observable(true),
    id: "nav4"
}, {
    title: "Levi's Stadium",
    lat: 37.40315,
    lng: -121.96984,
    streetAddress: "4900 Marie P DeBartolo Way",
    cityAddress: "Santa Clara, CA",
    url: "http://www.levisstadium.com/",
    display: true,
    visible: ko.observable(true),
    id: "nav5"
}, {
    title: "Lam Research Corporation",
    lat: 37.41526,
    lng: -121.95246,
    streetAddress: "4000 N 1st St",
    cityAddress: "San Jose, CA",
    url: "http://www.lamresearch.com/",
    display: true,
    visible: ko.observable(true),
    id: "nav6"
}, {
    title: "Target",
    lat: 37.41807,
    lng: -121.95615,
    streetAddress: "95 Holger Way",
    cityAddress: "San Jose, CA",
    url: "http://www.target.com/sl/san-jose-north--target-store/2581#?afid=storeloc&cpng=CA&Inm=san-jose-north_2581",
    display: true,
    visible: ko.observable(true),
    id: "nav7"
}, {
    title: "Domain Apartments",
    lat: 37.41479,
    lng: -121.95526,
    streetAddress: "1 Vista Montana",
    cityAddress: "San Jose, CA",
    url: "http://www.equityapartments.com/san-francisco-bay/north-san-jose/domain-apartments",
    display: true,
    visible: ko.observable(true),
    id: "nav8"
}, {
    title: "FT BBQ",
    lat: 37.41943,
    lng: -121.91549,
    streetAddress: "660 Barber Ln",
    cityAddress: "Milpitas, CA",
    url: "",
    display: true,
    visible: ko.observable(true),
    id: "nav9"
}, {
    title: "Facebook HQ(Where I will be an intern Summer 2016, Yeah!)",
    lat: 37.484575,
    lng: -122.147924,
    streetAddress: "12 Hacker Way",
    cityAddress: "Menlo Park, CA",
    url: "http://www.facebook.com",
    display: true,
    visible: ko.observable(true),
    id: "nav10"
}];



//handle the search and display marker and search result according to the search
var viewModel = {
    markers: ko.observableArray(markers),
    query: ko.observable(''),
    search: function(value) {
        // remove all the current markers, which removes them from the view
        viewModel.markers([]);

        for (var x in markers) {
            if (markers[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                viewModel.markers.push(markers[x]);
                markers[x].display = true;
            } else {
                markers[x].display = false;
                //resetMap();
            }
            //console.log(markers[x].display);
        }
        resetMap();
    },
    //move to marker when click on the list elements in search bar
    moveToMarker: function(clickedElem) {
        var ElemTitle = clickedElem.title;
        //console.log(ElemTitle);
        $("#search-bar").hide();
        for (var i = 0; i < markers.length; i++) {
            if (ElemTitle === markers[i].title) {
                google.maps.event.trigger(markers[i].holdmarker, 'click');
            }
        }

    }
};
viewModel.query.subscribe(viewModel.search);
ko.applyBindings(viewModel);

$("#toggle").click(function() {
    $("#search-bar").toggle();
});

$("#toggle-wiki").click(function() {
    $("#wiki-search-bar").toggle();
    $("#wiki-search-input").toggle();
});

function googlemapErrorHandler() {
    alert("The map cannot be loaded. Check your connection.");
}


function loadData() {
    var wikiTitle = $('#wiki-title').val();
    var $wikiElem = $('#wiki-search-bar');
    $wikiElem.text("");

    var wikiUrl = 'http://en.wikipedia.org/w/api.' +
        'php?action=opensearch&search=' + wikiTitle +
        '&format=json&callback=wikiCallback';
    console.log(wikiTitle);
    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);


    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        //jsonp:"callback",
        success: function(response) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                var articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' +
                    articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
                console.log(articleStr);
            }

            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
};

$('#form-container').submit(loadData);