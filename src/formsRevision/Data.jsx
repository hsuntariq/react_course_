import React from 'react'

const Data = ({name,email,age}) => {
  return (
    <>
        <h5>{name}</h5>
        <h6 className="text-secondary">
            {email}
        </h6>
    </>
  )
}

export default Data