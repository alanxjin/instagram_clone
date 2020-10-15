import React from "react";
import {
  IoIosHeartEmpty,
  IoMdText,
  IoIosSend,
  IoMdBookmark,
} from "react-icons/all";
import "./ToolBar.css";

function ToolBar({ children }) {
  return (
    <div className="ToolBar">
      <div>
        <IoIosHeartEmpty className="ToolBar__Icon" />
        <IoMdText className="ToolBar__Icon" />
        <IoIosSend className="ToolBar__Icon" />
      </div>
      <div className="ToolBar__Children">{children}</div>
      <div>
        <IoMdBookmark className="ToolBar__Icon" />
      </div>
    </div>
  );
}

export default ToolBar;
