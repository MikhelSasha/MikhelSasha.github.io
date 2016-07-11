 var map;
var nnovgorod = new google.maps.LatLng(49.85204568865772, 23.99176301434636);

var markers = [];
var image = new google.maps.MarkerImage( 'img/marker.png', // icon
new google.maps.Size(64,64), // icon dimensions width and height in pixels 
new google.maps.Point(0,0),
new google.maps.Point(42,56)
);

function addMarker() 
{
markers.push(new google.maps.Marker({
position: nnovgorod,
raiseOnDrag: false,
icon: image,
map: map,
draggable: false
}));
}
 
var MY_MAPTYPE_ID = 'mystyle';
 
function initialize() {
 
  var stylez =  [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
];
 
  var mapOptions = {
    zoom: 14,
    center: nnovgorod,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
 
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
  addMarker(); // calling function
 
  var styledMapOptions = {
    name: "Мой стиль"
  };
 
  var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
 
  map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);
}