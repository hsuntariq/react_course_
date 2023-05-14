import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNames([...names,name])
    setName("")
  };

  return (
    <>
      <div className="container col-lg-4 mx-auto mt-5">
        <form className="p-3 border shadow">
          <div className="form-group">
            <div className="label">Name</div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-dark w-100 my-1">
            Submit
          </button>
        </form>
        {names.map((name,index)=>{
            return(
                <>
                    <h4>{name}</h4>
                </>
            )
        })}
      </div>
      
    </>
  );
};

export default Form;
