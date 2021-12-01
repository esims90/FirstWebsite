// Initialize and add the map
function initMap() {
    // The location of Orlando
    const Orlando = { lat: 28.5384, lng: -81.3789 };
    // The map, centered at Orlando
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: Orlando,
    });
    // The marker, positioned at Orlando
    const marker = new google.maps.Marker({
      position: Orlando,
      map: map,
    });
}