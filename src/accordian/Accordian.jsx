import React, { useState } from 'react'
import { data } from './data'
import SingleQuestion from './SingleQuestion'

const Accordian = () => {
  const[questions,setQuestions] = useState(data)
//   const [text,setText] = useState(true)
//   const firstVal = text || 'hello'
//   const firstVal = text && 'hello'
  return (
    <>
        <div className="container text-center text-capitalize">
            {questions.map((question)=>{
                return <SingleQuestion key={question.id} {...question}/>
            })}
        </div>
    </>
  )
}

export default Accordian

/* const data = [1,2,43,5,6,75,8] 
    data.map((d)=>{
        return console.log(d)
    })
*/
