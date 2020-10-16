import React from "react";
import "./Header.css";
import { BsThreeDots } from "react-icons/all";
import { connect } from "react-redux";

function Header({ username, status, profileImage, mode = "portrait" }) {
  return (
    <div className="Header">
      <img alt="Profile" className="Header__Image" src={profileImage} />
      <div className="Header__Text">
        <div className="bold">
          {username} {mode === "landscape" && <span>• Following</span>}
        </div>
        <div>{status}</div>
      </div>
      <BsThreeDots className="Header__Icon" />
    </div>
  );
}

function mapStateToProps(state) {
  const { post } = state;
  return {
    username: post.username,
    status: post.status,
    profileImage: post.profileImage,
  };
}

export default connect(mapStateToProps)(Header);
