import React from "react";
import { render } from "react-dom";

import Option from "./Option";
const Obj = [
  {
    id: 1,
    userId: 123,
    name: "This is the simple example of props",
    user: "prem",
    param: true
  },
  {
    id: 2,
    userId: 124,
    name: "The any data format lies here",
    user: "Awesome user",
    param: false
  },
  {
    id: 3,
    userId: 125,
    name: "Life is here at jamshedpur",
    user: "Someone",
    param: true
  }
];
// data of the todo list

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      components: Obj
    };
    this.Change = this.Change.bind(this);
  }
  Change = (id) => {
    this.setState((prev) => {
      let newArr = prev.components.map((x) => {
        if (x.userId === id) {
          console.log(x);
          if (x.param === true) {
            x.param = !x.param;
            console.log("ha bhai ho gaya", x.param);
          } else x.param = true;
          console.log(x);
        }
        return x;
      });
      return { components: newArr };
    });
    console.log("Changed" + id + " " + this.state.components.param);
  };

  render() {
    var Components = this.state.components.map((obj) => {
      return (
        <Option
          key={obj.id}
          userId={obj.userId}
          name={obj.name}
          user={obj.user}
          Change={this.Change}
          param={obj.param}
        />
      );
    });
    return <div>{Components}</div>;
  }
}

export default Todo;
