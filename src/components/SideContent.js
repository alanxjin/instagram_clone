import React from "react";
import Header from "./Header";
import "./SideContent.css";
import CommentBox from "./CommentBox";
import Description from "./Description";
import LandscapeDesContent from "./LandscapeDesContent";

function SideContent() {
  return (
    <div className="SideContent">
      <Header mode="landscape" />
      <LandscapeDesContent />
      <Description mode="landscape" />
      <CommentBox />
    </div>
  );
}

export default SideContent;
