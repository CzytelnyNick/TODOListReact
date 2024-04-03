import React from 'react'

function Todotask({ message }) {
    return (
        <div className='todoTask'><div className="todoTextArea">{message}</div><button className="todoEditButton"></button><button className="todoDeleteButton"></button></div>
    )
}

export default Todotask