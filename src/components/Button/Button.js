import React from 'react';

function Button(props) {
    return (
        <div style={{
            color: props.color,
            backgroundColor: props.bgc,
            width: props.wdh,
            height: props.height,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            boxShadow: '0 5px 5px rgba(0, 0, 0, 0.15)',
            fontFamily: 'Raleway',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer'
        }}> {props.text} </div>
    )
}
export default Button;