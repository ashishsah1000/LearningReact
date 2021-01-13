import React from "react";
function Option(props) {
  return (
    <div
      className="m-todo"
      style={{ backgroundColor: props.user ? "orangeRed" : "green" }}
    >
      <p style={{ color: "white", fontSize: 18 }}>
        <input
          type="checkbox"
          onChange={() => {
            props.Change(props.userId);
          }}
        ></input>{" "}
        {props.name}:
      </p>
      <hr />
      <p style={{ color: "rgba(222,222,222,.5)", fontSize: 18 }}>
        {props.user}
      </p>
    </div>
  );
}

export default Option;
