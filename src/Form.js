import React, { Component } from 'react';

class Form extends Component {
    sendForm = (event) => {
        return (
            this.props.onValueChange(this.refs.city.value),
            event.preventDefault()
        )
    }

    render() {
        const city = this.props.value;
        return (
            <form onSubmit={(event) => { this.sendForm(event) }}>
                <div className="input-group">
                    <input className="form-input input-sm" type="text" value={city} ref="city" placeholder="Wpisz nazwę miasta" />
                    <button className="btn btn-primary input-group-btn btn-sm">Pokaż</button>
                </div>
            </form>
        )
    }
}

export default Form;