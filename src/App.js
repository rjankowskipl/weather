import React from 'react';

import './App.scss';

class Score extends React.Component {
    render() {
        const { city, temp, desc, icon } = this.props
        return (
            <div>
                <div className="icon">
                    <span>{desc}</span>
                    <img src={icon} alt="Obrazek" />
                </div>
                <div className="desctiption">
                    <span>{city}</span>
                    <span>{temp}&#8451;</span>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {
    constructor() {
        super();
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue() {
        this.props.onValueChange(this.refs.city.value)
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) {
            this.props.onValueChange(this.refs.city.value)
        } 
    }

    render() {
        const city = this.props.value;
        return (
            <div className="input-group">
                <input className="form-input input-sm" type="text" value={city} ref="city" onKeyPress={this.enterPressed.bind(this)} placeholder="Wpisz nazwę miasta" />
                <button className="btn btn-primary input-group-btn btn-sm" onClick={this.changeValue}>Pokaż</button>
            </div>
        )
    }
}

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            city: '',
            temp: '',
            desc: '',
            icon: ''
        };

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&APPID=db088bed6a1d9bfbf4de73b069768c93`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        city: result.name,
                        temp: Math.round(result.main.temp),
                        desc: result.weather[0].description,
                        icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return (
                <div>
                    <h5>Przepraszamy wyszukana miejscowość nie istnieje</h5>
                    <a href="/" className="btn btn-sm mt-4">Wyszukaj ponownie</a>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div>
                    <Form onValueChange={this.changeValue} />
                </div>
            )
        } else {
            return (
                <div>
                    <Score city={this.state.city} temp={this.state.temp} desc={this.state.desc} icon={this.state.icon} />
                    <div class="back">
                        <a href="/" className="btn btn-sm">Wyszukaj ponownie</a>
                    </div>
                </div>
            )
        }
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Aplikacja pogodowa:</h3>
            </header>
            <section className="App-section">
                <div className="container">
                    <div className="columns">
                        <div className="column col-lg-6 col-md-8 col-4 col-mx-auto">
                            <div className="panel">
                                <div className="panel-header">
                                    <div className="panel-title h2 mt-10">Pogoda</div>
                                </div>
                                <div className="panel-body">
                                    <Weather />
                                </div>
                                <div className="panel-footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="App-footer">
            </footer>
        </div>
    )
}

export default App;