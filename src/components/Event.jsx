import React from "react";

class Event extends React.Component {
  constructor() {
    super();
    // var intv;
    this.state = {
      condition: false,
      data: "Click down to start the date "
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.condition) {
      intv = setInterval(() => {
        console.log("interval Started");
        var d = new Date();
        var n = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();

        this.setState((prevState) => {
          return {
            data: n,
            condition: false
          };
        });
      }, 1000);
    } else {
      clearInterval(intv);
      this.setState((prev) => {
        return {
          data: "You ended the session",
          condition: true
        };
      });
    }
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
        {this.state.condition ? (
          <button onClick={this.handleClick}>Start</button>
        ) : (
          <button onClick={this.handleClick}>End</button>
        )}
      </div>
    );
  }
}

export default Event;
