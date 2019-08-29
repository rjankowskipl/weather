import React from 'react';
import Score from './Score';
import Form from './Form';
import ErrorWeather from './ErrorWeather';

class Weather extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        city: '',
        temp: '',
        desc: '',
        icon: ''
    }

    changeValue = async city => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&APPID=db088bed6a1d9bfbf4de73b069768c93`);
            const data = await res.json();
            const { name, main, weather } = data
            this.setState({
                isLoaded: true,
                city: name,
                temp: Math.round(main.temp),
                desc: weather[0].description,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
            });
        } catch(error) {
            this.setState({
                isLoaded: true,
                error
            })
        }
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <ErrorWeather />
        } else if (!isLoaded) {
            return <Form onValueChange={(city) => { this.changeValue(city) }} />
        } else {
            return <Score city={this.state.city} temp={this.state.temp} desc={this.state.desc} icon={this.state.icon} />
        }
    }
}

export default Weather;