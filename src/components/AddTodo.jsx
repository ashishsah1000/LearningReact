import React from "react";

function AddTodo(props) {
  var z = "";
  function Color(x) {
    z = x;
  }
  function handleClick() {
    var x = document.querySelector(".job").value;
    var y = document.querySelector(".disc").value;
    if (x !== "" && y !== "" && z !== "") props.addElement(x, y, z);
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
          <div className=" col s12">
            <spam
              class="m_chip"
              onClick={() => {
                Color("red");
              }}
            >
              Prior
            </spam>
            <spam
              class="m_chip"
              onClick={() => {
                Color("yellow");
              }}
            >
              Medium
            </spam>
            <spam
              class="m_chip"
              onClick={() => {
                Color("green");
              }}
            >
              Comfortable
            </spam>
          </div>
          <div className=" col s12">
            <button
              className="btn waves-effect waves-light"
              onClick={handleClick}
              style={{ background: "red", marginTop: 20 }}
            >
              {" "}
              Add job +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
