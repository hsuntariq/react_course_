import React, { useState } from 'react'

const Object = () => {
    const [person,setPerson] = useState({
        name:'Ali',age:20,message:'this is ali\'s message'
    })
    const handleClick = () => {
        setPerson({...person,message:'new message',name:'Saad'})
    }
  return (
    <>
    <div className="container text-center">
        <h1>Object State</h1>
        <h4>Name:{person.name}</h4>
        <h4>Age:{person.age}</h4>
        <h4>Message:{person.message}</h4>
        <button onClick={handleClick} className="btn btn-info">
            Change Message
        </button>
    </div>
    </>
  )
}

export default Object