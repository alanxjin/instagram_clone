import React from "react";
import LandscapeComment from "./LandscapeComment";
import "./LandscapeDesContent.css";

function LandscapeDesContent() {
  return (
    <div className="LandscapeDesContent">
      <LandscapeComment isDes={true} />
      <LandscapeComment subComments={[{ commentId: "1234", text: "test" }]} />
      <LandscapeComment />
    </div>
  );
}

export default LandscapeDesContent;
