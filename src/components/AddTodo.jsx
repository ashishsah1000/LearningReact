import React from "react";

function AddTodo(props) {
  function handleClick() {
    var x = document.querySelector(".job").value;
    var y = document.querySelector(".disc").value;

    props.addElement(x, y);
  }
  return (
    <div className="col s12 m3">
      <div className="card-panel white ">
        <span className="grey-text">Enter the Job that you want to add</span>
        <div className="row">
          <div className="input-field col s12">
            <input className="job" placeholder="Title of the Job" type="text" />
          </div>
          <div className="input-field col s12">
            <input
              className="disc"
              placeholder="Text fot the Job"
              type="text"
            />
          </div>
          <button
            className="btn waves-effect waves-light"
            onClick={handleClick}
            style={{ background: "red" }}
          >
            {" "}
            Add job +{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
