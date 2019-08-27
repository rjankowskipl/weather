import React from 'react';

class ErrorWeather extends React.Component {
    render() {
        return (
            <div>
                <h6>Przepraszamy wyszukana miejscowość nie istnieje</h6>
                <div className="back">
                    <a href="/" className="btn btn-sm">Wyszukaj ponownie</a>
                </div>
            </div>
        )
    }
}

export default ErrorWeather;