import React from "react";
import SlidesIndicator from "./SlidesIndicator";
import ToolBar from "./ToolBar";
import "./Description.css";
import { connect } from "react-redux";
import moment from "moment";

const numberFormatter = new Intl.NumberFormat();
function Description({
  timestamp,
  likes,
  children,
  portraitSlideInd,
  mode = "portrait",
}) {
  return (
    <div className="Description">
      <ToolBar>
        {mode === "portrait" && (
          <SlidesIndicator size={5} currentInd={portraitSlideInd} />
        )}
      </ToolBar>
      <div className="bold">{numberFormatter.format(likes)} likes</div>
      {children}
      <div className="Description__Time">
        {moment(timestamp).fromNow().toLocaleUpperCase()}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { post, portraitSlideInd } = state;
  return {
    likes: post.likes,
    timestamp: post.timestamp,
    portraitSlideInd,
  };
}

export default connect(mapStateToProps)(Description);
