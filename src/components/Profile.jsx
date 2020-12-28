import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = this.props;
  }

  render() {
    console.log(this.state);
    function getData(e) {
      console.log(e);
    }
    return (
      <div className="profile">
        <div className="c-profile">
          <div className="p-top"></div>
          <div className="p-bottom">
            <p>
              <span>First Name : {this.props.first_name} </span>
            </p>
            <p>
              <span>Last Name : {this.props.last_name}</span>
            </p>
            <p>
              <span>IP Adress : {this.props.ip_address}</span>
            </p>
            <button onClick={getData(this)}>Know Info</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
