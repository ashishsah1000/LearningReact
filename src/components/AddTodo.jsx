import React from "react";

function AddTodo() {
  return (
    <div>
      <div className="tBox">
        <h1>Enter Job</h1>
        <input type="text" placeholder="Job Heading" />
        <br />
        <input type="text" placeholder="Job discription" />
        <br />
        <button style={{ background: "red" }}> Add job + </button>
      </div>
    </div>
  );
}

export default AddTodo;
