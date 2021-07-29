import React from "react";
// Styles
import "./User.styles.css";

const User = ({ user }) => {
  return (
    <>
      {user.map((ele, index) => {
        return (
          <div className="card_item" key={index}>
            <div className="card_inner">
              <img src={ele.logo} alt={ele.name} />
              <div className="role_name">{ele.name}</div>
              <div className="real_name">{ele.country}</div>
              <div className="film">{ele.slogan}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;
