import React from "react";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import Header from "./Header";
import "./PortraitPage.css";
import Description from "./Description";
import PortraitDesContent from "./PortraitDesContent";
import { connect } from "react-redux";
import { updateSlideInd } from "../actions";

function PortraitPage({ portraitSlideInd, setCurrentInd }) {
  return (
    <div className="PortraitPage">
      <Header />
      <Carousel setCurrentInd={setCurrentInd} currentInd={portraitSlideInd} />
      <Description>
        <PortraitDesContent />
      </Description>
      <CommentBox />
    </div>
  );
}

function mapStateToProps(state) {
  const { portraitSlideInd } = state;
  return {
    portraitSlideInd,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentInd: (ind) => {
      dispatch(updateSlideInd(ind));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortraitPage);
