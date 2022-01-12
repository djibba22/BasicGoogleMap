let map;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude
  let long = position.coords.longitude
  console.log(lat, long);
  initMap(lat, long)
  getTrails(lat, long)
}

function initMap(lat, long) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 8,
  });
}

getLocation();
        
const getTrails = (lat, long) => {
  let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=50000&type=park&keyword=hiking&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w';

  var hiker = "./images/hiker.png";

  fetch(url, {
    method: 'GET',
    dataType: 'jsonp',
    headers: {}
  })
  .then(response => response.json())
  .then(data => {
    
    //map over this data and create markers on the map
    data.results.forEach(place => {
      console.log(place)
       
       
      new google.maps.Marker({
        position: place.geometry.location,
        map,
        // icon: hiker, //If you add a custom icon you can add that here
        title: place.name,
      });
     
    });

  })
  .catch(err =>  console.log(err))
}



                

      
    
      
    


          
     
      
    




// fetch("https://api.stackexchange.com/2.3/search?page=1&pagesize=10&fromdate=1633046400&todate=1633305600&order=desc&min=1633046400&max=1633305600&sort=activity&tagged=css&intitle=animation&site=stackoverflow", {
// 	"method": "GET",
// 	"headers": {

// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data => {
// 	console.log(data);
// });




