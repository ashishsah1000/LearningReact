import React from "react";

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Click down to start the date "
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var intv = setInterval(() => {
      console.log("interval Started");
      var d = new Date();
      var n = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
      this.setState((prevState) => {
        return {
          data: n
        };
      });
    }, 1000);
  }
  render() {
    var newStyle = {
      color: "rgba(22,22,22,.9)",
      padding: 20,
      background: "dodgerBlue",
      width: 400,
      margin: "0px auto",
      marginTop: 100,
      fontFamily: "consolas",
      borderRadius: 5
    };
    return (
      <div style={newStyle}>
        <h1>Hey {this.props.username}</h1>
        <h1>{this.state.data}</h1>
        <button onClick={this.handleClick}>Start</button>
      </div>
    );
  }
}

export default Event;
