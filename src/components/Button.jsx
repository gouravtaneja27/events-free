import React from 'react'
import './button.css'

function Button(props) {
    return (
        <button className={`custom-btn ${props.className || ''}`}>
            {props.text}
        </button>
    )
}

export default Button
            
