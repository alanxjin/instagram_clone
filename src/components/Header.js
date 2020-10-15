import React from "react";
import "./Header.css";
import { BsThreeDots } from "react-icons/all";

function Header({ mode = "portrait" }) {
  return (
    <div className="Header">
      <img
        alt="Profile"
        className="Header__Image"
        src={process.env.PUBLIC_URL + "/imgs/postProfile.jpg"}
      />
      <div className="Header__Text">
        <div className="bold">
          alanxjin {mode === "landscape" && <span>• Following</span>}
        </div>
        <div>Four Seasons Hotel Hampshire, England</div>
      </div>
      <BsThreeDots className="Header__Icon" />
    </div>
  );
}

export default Header;
