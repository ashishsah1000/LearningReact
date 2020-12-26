import React from "react";

function Profile(props) {
  return (
    <div className="profile">
      <div className="c-profile">
        <div className="p-top"></div>
        <div className="p-bottom">
          <p>
            <span>First Name : {props.first_name} </span>
          </p>
          <p>
            <span>Last Name : {props.last_name}</span>
          </p>
          <p>
            <span>IP Adress : {props.ip_address}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
