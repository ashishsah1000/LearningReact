import React from "react";
class Option extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div
        className="m-todo"
        style={{ backgroundColor: this.props.user ? "orangeRed" : "green" }}
      >
        <p style={{ color: "white", fontSize: 18 }}>
          <input type="checkbox"></input> {this.props.name}:
        </p>
        <hr />
        <p style={{ color: "rgba(222,222,222,.5)", fontSize: 18 }}>{this.props.user}</p>
      </div>
    );
  }
  
}

export default Option;
