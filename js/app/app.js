    // Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
    // to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
    // This is done by using the addEventListener() function.

    //define global variables
    var latitude = undefined;
    var longitude = undefined;
    var map;
    var marker;

    //We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
    // which we earlier added to the native functions of the javascript

    function getLocation(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
    }

    // onSuccess Geolocation
    function onSuccess(position) {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        insertMarker();

    }

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('Something went wrong'    + '\n' +
            'Kindly make sure your GPS is on' + '\n');
    }

    //function to initialize map
    function initMap(){
        var options = {
            center: {lat: 5.5557, lng: -0.1963},
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map'), options); 
        marker = new google.maps.Marker({
            position: {lat:5.5557, lng: -0.1963},
            map: map
        });

        marker.setVisible(false);

    }

    //function to insert location on map
    function insertMarker(){
        var position = new google.maps.LatLng(latitude,longitude);
        map.setCenter(position);
        marker.setPosition(position);
        marker.setVisible(true);
    }

    //function to make marker visible
    function makeVisible() {
        marker.setVisible(true);
    }

    //function to hide marker 
    function hide() {
        marker.setVisible(false);
    }