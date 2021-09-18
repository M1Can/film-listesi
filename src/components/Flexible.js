import React from 'react'

const Flexible = (props) => {
    return (
        <div className={props.classFlex}>
            {props.children}
        </div>
    )
}

export default Flexible
