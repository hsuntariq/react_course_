import React, { useState } from 'react'
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
const SingleQuestion = ({question,answer}) => {
    const [show,setShow] = useState(false)
  return (
    <>
        <div className="container col-lg-7 m-auto">
            <div className="row border shadow-sm my-3 p-1">
                <div className="col-9 text-left">
                    <h6 className='font-weight-bolder'>{question}</h6>
                    <h6 className="text-secondary">
                        {show && answer}
                    </h6>
                </div>
                <div className="col-3 text-right ">
                    {show ? (
                        <>
                        <RiArrowDropUpLine
                        onClick={()=>setShow(!show)}
                        style={{fontSize:'2rem',cursor:'pointer'}}/>
                        </>
                    ):(
                        <>
                         <RiArrowDropDownLine
                         onClick={()=>setShow(!show)}
                         style={{fontSize:'2rem',cursor:'pointer'}}/>
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleQuestion