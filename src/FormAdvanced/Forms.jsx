import React, { useState } from "react";
import Model from "./Model";

const Forms = () => {
    const [formFields,setFormFields] = useState({
        name:'',email:'',age:''
    })
    const[data,setData] = useState([]);
    // destructure the data
    const {name,email,age} = formFields;

    // handle the submit data

    const handleSubmit = (e) => {
        e.preventDefault();
        let myData = {id:Date.now(),name,email,age};
        setData([...data,myData])
        setFormFields({name:'',email:'',age:''})
        console.log(data)
    }


    // handle the change

    const onChange = (e) => {
        setFormFields((prevVal)=>({
            ...prevVal,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <>
      <div className="container col-lg-6 mt-5 shadow p-3 border">
        <form className="border p-3">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
            className="form-control" 
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Please Enter your name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
            className="form-control" 
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Please Enter your email..."
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Age</label>
            <input
            className="form-control" 
            type="number"
            name="age"
            value={age}
            onChange={onChange}
            placeholder="Please Enter your age..."
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-info my-2 w-50 d-flex m-auto justify-content-center">
            Submit Data
          </button>
        </form>
        {data.map((details)=>{
            return(
                <>
                    <div key={details.id} className="container text-center">
                        <div className="row text-center">
                            <div className="col-6">
                                <h6>{details.id}</h6>
                                <h4>{details.name}</h4>
                            </div>
                            <div className="col-6">
                                <h4>{details.age}</h4>
                            </div>
                        </div>
                        <p className="text-secondary">
                            {details.email}
                        </p>
                    </div>
                </>
            )
        })}
      </div>
    </>
  );
};

export default Forms;
