import React from "react";

function Option(props) {
  function deleteElement() {
    props.deleteData(props.id);
  }
  var card = "card" + " " + props.color;
  return (
    <div className="col s12 m3 l3">
      <div className={card}>
        <div className="card-content white-text">
          <span className="card-title">{props.job}</span>
          <p>{props.text}</p>
        </div>
        <div className="card-action">
          <button
            className="waves-effect waves-light btn"
            onClick={deleteElement}
            style={{ background: "green" }}
          >
            {" "}
            - Job done
          </button>
        </div>
      </div>
    </div>

    // <div className="cl">
    //   <div>
    //     <div className="tBox ">
    //       <h3>{props.job}</h3>
    //       <p>{props.text}</p>
    //       <span>{props.color}</span>
    //       <br />
    //       <button className="waves-effect waves-light btn" onClick={deleteElement} style={{ background: "green" }}> - Job done</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Option;
