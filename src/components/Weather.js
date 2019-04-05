import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state =  {
    	lat: 35,
    	lng: 139,
    	weather: null
    }
  }

  async componentDidMount() {
    await this.fetchWeatherReport()
  }

	fetchWeatherReport() {
		// navigator.geolocation.getCurrentPosition(
		// 	   //Will give you the current location
		// 	   (position) => {
		// 	   		debugger
		// 	       const currentLongitude = JSON.stringify(position.coords.longitude);
		// 	       //getting the Longitude from the location json
		// 	       const currentLatitude = JSON.stringify(position.coords.latitude);
		// 	       //getting the Latitude from the location json
		// 	   },
		// 	   (error) => alert(error.message),
		// 	   {
		// 	      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
		// 	   }
		// 	);
		// 	debugger
    	fetch(`http://localhost:3000/api/v1/weathers?lat=${this.state.lat}&lng=${this.state.lng}`, {
	      method: "GET",
	      headers: {
	        "Content-Type": "application/json"
	      },
	    }).then(res => res.json()).then(json => {
	      this.setState({weather: json})
	    })
    }


  render () {
  	let temperature = this.state.weather ? this.state.weather.main.temp : ""
  	
	  return (
	  	<div><strong><p>Temperature</p></strong>{temperature}< /div>
	  )
  }
}


export default Weather;
