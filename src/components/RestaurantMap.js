const React = require('react')

const RestaurantMap = React.createClass({
  componentDidMount(){
        var google = window.google

        function initMap() {
        var uluru = {lat: 37.7749, lng: -122.4194};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }
    initMap()
  },

  render(){
    return (
      <div>
        <h2>Find us here...</h2>
        <div id='map'></div>
      </div>
    )
  }
})

module.exports = RestaurantMap
