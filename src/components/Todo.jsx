import React from "react";
import { render } from "react-dom";

import Option from "./Option";
const Obj = [
  {
    id: 1,
    userId: 123,
    name: "This is the simple example of props",
    user: "prem"
  },
  {
    id: 2,
    userId: 124,
    name: "The any data format lies here",
    user: "Awesome user"
  },
  {
    id: 3,
    userId: 125,
    name: "Life is here at jamshedpur",
    user: ""
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
    console.log("Changed", id);
    return 0;
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
        />
      );
    });
    return <div>{Components}</div>;
  }
}

export default Todo;
