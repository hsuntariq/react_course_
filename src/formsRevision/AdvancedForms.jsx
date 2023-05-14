import React, { useState } from "react";
import Data from "./Data";
import Modal from "./Modal";

const AdvancedForms = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [error,setError] = useState(false);
  const [data,setData] = useState([])
  // destructure data
  const {name,email,age} = formFields;

//   handle the submit
const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email && age){
        const myData = {name,email,age};
        setData([...data,myData])
        setFormFields({name:'',email:'',age:''})
    }else{
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000);
    }
        
    
    }

//   handle the change

const change = (e) => {
    setFormFields((prevValue)=>({
        ...prevValue,
        [e.target.name] : e.target.value
    }))
}
  return (
    <>
        {error && <Modal/>}
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input 
            type="text"
            name="name"
            className={`form-control ${error && 'border-danger'}`}
            value={name}
            onChange={change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input 
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Age</label>
            <input 
            type="number"
            name="age"
            className="form-control"
            value={age}
            onChange={change}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-info my-3 w-100">Submit Data</button>
        </form>
      </div>
      <div className="container col-lg-4">
        {data.map((d)=>{
            return <Data {...d}/>
        })}
      </div>
    </>
  );
};

export default AdvancedForms;
