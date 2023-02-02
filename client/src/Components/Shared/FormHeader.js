import React from 'react'
import logo from '../../asset/images/logo_without_bg.png';

const FormHeader = ({name}) => {
    return (
        <div className="form-header">
            <div className="form-image">
                <img src={logo} alt="Logo" />
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default FormHeader