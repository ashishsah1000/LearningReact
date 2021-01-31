import React from "react";
// import Data from "../Data/Data";
import Option from "./Option";
import AddTodo from "./AddTodo";

var CreatedData = [
  {
    id: 1,
    job: "Break time",
    text: "This is a random discription",
    color: "green",
    nId: 4
  },
  {
    id: 2,
    job: "bring wheat",
    text: "This is a random discription",
    color: "red",
    nId: 3
  }
];
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      components: CreatedData
    };
    this.addElement = this.addElement.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
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

  addElement = (Job, Text) => {
    var ele = {
      id: Math.random() * 10,
      job: Job,
      text: Text,
      color: "purple",
      nId: Math.random() * 10
    };
    CreatedData.push(ele);
    this.setState((prev) => {
      return {
        components: CreatedData
      };
    });
  };
  deleteElement = (id) => {
    for (var i = 0; i < CreatedData.length; i++) {
      if (CreatedData[i].nId === id) {
        CreatedData.splice(i, 1);
        break;
      }
    }
    this.setState((prev) => {
      return {
        components: CreatedData
      };
    });
  };
  render() {
    var list = this.state.components.map((x) => {
      return (
        <Option
          key={x.id}
          id={x.nId}
          job={x.job}
          text={x.text}
          color={x.color}
          deleteData={this.deleteElement}
        />
      );
    });
    return (
      <div className="row">
        {list}
        <AddTodo addElement={this.addElement} />
      </div>
    );
  }
}

export default Todo;
