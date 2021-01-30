import React from "react";

function Option(props) {
  return (
    <div className="cl">
      <div>
        <div className="tBox">
          <h1>{props.job}</h1>
          <p>{props.text}</p>
          <span>{props.color}</span>
          <br />
          <button style={{ background: "green" }}> - Job done</button>
        </div>
      </div>
    </div>
  );
}

export default Option;
