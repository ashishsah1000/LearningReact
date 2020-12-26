import React from "react";

import Option from "./Option";
const Obj = [
  {
    id: 1,
    name: "This is the simple example of props",
    user: "prem"
  },
  {
    id: 2,
    name: "The any data format lies here",
    user: "Awesome user"
  },
  {
    id: 3,
    name: "Life is here at jamshedpur",
    user: ""
  }
];

var Components = Obj.map(function (obj) {
  return <Option key={obj.id} name={obj.name} user={obj.user} />;
});
function Todo() {
  return <div>{Components}</div>;
}

export default Todo;
