import React from 'react'

import '../../index.css'
import classes from './Counter.module.css'

const Counter = (props) => {
    return (
        <div>
            <h1 className={classes.titleTest}>{props.data.title}</h1>
            <p className={classes.countNumber}>{props.data.countDown}</p>
        </div>     
        
    )
}

export default Counter