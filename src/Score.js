import React from 'react';

class Score extends React.Component {
    render() {
        const { city, temp, desc, icon } = this.props
        return (
            <div>
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
                <div className="back">
                    <a href="/" className="btn btn-sm">Wyszukaj ponownie</a>
                </div>
            </div>
        )
    }
}

export default Score;