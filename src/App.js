import React from 'react';
import Weather from './Weather';

import './App.scss';

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