import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = this.props;
    this.getData = this.getData.bind(this);
  }
  getData(e) {
    console.log(this.props.first_name);
  }

  render() {
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
            <button onClick={this.getData}>Know Info</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
