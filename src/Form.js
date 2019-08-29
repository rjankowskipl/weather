import React from 'react';

const Form = ({onValueChange}) => {
    const sendForm = event => {
        return (
            onValueChange(event.target.elements[0].value),
            event.preventDefault()
        )
    }
    return (
        <form onSubmit={sendForm}>
            <div className="input-group">
                <input className="form-input input-sm" type="text" placeholder="Wpisz nazwę miasta" />
                <button className="btn btn-primary input-group-btn btn-sm">Pokaż</button>
            </div>
        </form>
    )
}

export default Form;