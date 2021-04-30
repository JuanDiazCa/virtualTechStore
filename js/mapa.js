// jQuery(function ($) {
//     // Google Maps setup
//     var googlemap = new google.maps.Map(
//         document.getElementById('googlemap'),
//         {
//             center: new google.maps.LatLng(44.5403, -78.5463),
//             zoom: 8,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//     );
// });


function initialize() {
    var map = new google.maps.Map(
      document.getElementById('googlemap'), {
        center: new google.maps.LatLng(37.4419, -122.1419),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.4419, -122.1419),
          map: map
    });

  }

  initialize();