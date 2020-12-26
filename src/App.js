import React from "react";
import "./styles.css";

import Todo from "./components/Todo";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Data from "./Data/Data";

var Cdata = Data.map(function (params) {
  return (
    <Profile
      first_name={params.first_name}
      last_name={params.last_name}
      ip_address={params.ip_address}
    />
  );
});

class App extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <Todo />
      </div>
    )
  }
}

export default App