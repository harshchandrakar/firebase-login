import React from "react";
import "./Userdetail.css";

function Userdetail({ username, pic }) {
  return (
    <div className="userdetail">
      <h1 className="user">{username}</h1>
      <img className="user-pic" src={pic} alt="user profile" />
    </div>
  );
}

export default Userdetail;
