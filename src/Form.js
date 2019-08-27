import React from 'react';

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

export default Form;