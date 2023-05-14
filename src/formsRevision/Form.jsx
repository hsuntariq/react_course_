import React, { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {id:Date.now(),todo}
    setTodos([...todos,data])
  }
  return (
    <>
      <div className="container col-lg-4 p-3 shadow border">
        <form>
          <div className="form-group">
            <label htmlFor="">Todo</label>
            <input
              type="text"
              placeholder="Enter your Todo..."
              className="form-control"
              value={todo}
              onChange = {(e)=>setTodo(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-dark my-3 d-flex m-auto w-50 justify-content-center">
            Submit
          </button>
        </form>
        {todos.map((todo,index)=>{
            return(
                <>
                <div key={todo.id} className="container">
                    <h1>{todo.todo}</h1>
                </div>
                </>
            )
        })}
      </div>
    </>
  );
};

export default Form;
