import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log(temps);
        return (
            <tr key={name}>
                <td> {name}</td>
                <td> <Chart data={temps} color="orange" units="Celsius" /></td>  
                <td> <Chart data={humidities} color="orange" units="%" /></td> 
                <td> <Chart data={pressures} color="blue" units="hPa" /></td>  
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Humidity(%) </th>
                        <th>Pressure (hPa)</th>   
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // {weather} === } {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
