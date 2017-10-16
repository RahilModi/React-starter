import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

	renderWeather(cityData){

		const NAME = cityData.city.name;
		const Temps = cityData.list.map(weather => weather.main.temp - 273.15)
		const Pressures = cityData.list.map(weather => weather.main.pressure * 100)
		const Humidities = cityData.list.map(weather => weather.main.humidity)
		const {lon, lat} = cityData.city.coord;

		return(
			<tr key={NAME}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={Temps} color="green" units="&deg;c"/>
				</td>
				<td>
					<Chart data={Pressures} color="red" units="Pa"/>
				</td>
				<td>
					<Chart data={Humidities} color="blue" units="%"/>
				</td>
			</tr>
		)
	}

	render(){
		return(
			<table className="table table-hower">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (&deg;c)</th>
						<th>Pressure (Pa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}

}


function mapStateToProps({weather}){  // state.weather
	return {weather};  //{weather} == {weather, weather}
}

export default connect(mapStateToProps)(WeatherList);