import React from 'react'

import '../../index.css';

const Test = (props) => {
    return (
        <div>
            <h1 className="titleTest">{props.data.title}</h1>
            <p className="countNumber">{props.data.countDown}</p>
        </div>     
        
    )
}

export default Test