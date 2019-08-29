import React from 'react';

function Score(props) {
    return (
        <div>
            <div>
                <div className="icon">
                    <span>{props.desc}</span>
                    <img src={props.icon} alt="Obrazek" />
                </div>
                <div className="desctiption">
                    <span>{props.city}</span>
                    <span>{props.temp}&#8451;</span>
                </div>
            </div>
            <div className="back">
                <a href="/" className="btn btn-sm">Wyszukaj ponownie</a>
            </div>
        </div>
    )
}

export default Score;