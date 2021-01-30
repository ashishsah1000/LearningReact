import React from "react";
// import Data from "../Data/Data";
import Option from "./Option";
import AddTodo from "./AddTodo";

var CreatedData = [
  {
    id: 1,
    job: "Break time",
    text: "This is a random discription",
    color: "white"
  },
  {
    id: 2,
    job: "bring wheat",
    text: "This is a random discription",
    color: "white"
  }
];
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      components: CreatedData
    };
    // this.Change = this.Change.bind(this);
  }
  // Change = (id) => {
  //   this.setState((prev) => {
  //     let newArr = prev.components.map((x) => {
  //       if (x.userId === id) {
  //         console.log(x);
  //         if (x.param === true) {
  //           x.param = !x.param;
  //           console.log("ha bhai ho gaya", x.param);
  //         } else x.param = true;
  //         console.log(x);
  //       }
  //       return x;
  //     });
  //     return { components: newArr };
  //   });
  //   console.log("Changed" + id + " " + this.state.components.param);
  // };

  render() {
    var list = this.state.components.map((x) => {
      return <Option key={x.id} job={x.job} text={x.text} color={x.color} />;
    });
    return (
      <div>
        {list}
        <AddTodo />
      </div>
    );
  }
}

export default Todo;
