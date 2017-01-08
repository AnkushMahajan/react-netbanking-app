import React from 'react'
import {Textfield} from 'react-mdl';

export default function({ input, label, type, meta: { touched, error, warning } }) {
    return (
        <div>
            <div>
                <Textfield {...input} label={label} type={type} style={{width: '200px'}}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}