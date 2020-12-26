import React from "react";

class LearnState extends React.Component {
  // we will also be sending props data but class automatically takes it in the keyword "props" and
  // we can access it in "this.props.d..."
  constructor() {
    super(); //this will call the all important super functions
    this.state = {
      name: "Flekenstine"
    }; // Super object for this component changing this will change everything
  }
  // class has to render somehing
  render() {
    // render function will return the output
    return (
      <div>
        <h1>{this.props.UserName}</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default LearnState;
