import React, { useState } from "react";
import "./LandscapeComment.css";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/all";
import moment from "moment";
import { connect } from "react-redux";
import { likeComment as likeCommentDB } from "../localStorage";
import { likeComment, replyComment } from "../actions";

function LandscapeComment({
  likeCommentRD,
  replyCommentRD,
  id,
  replyId,
  profileImage,
  username,
  loginUser,
  text,
  timestamp,
  liked = [],
  isDes = false,
  subComments = [],
}) {
  const [isHidden, setIsHidden] = useState(true);

  const timeStr = moment(timestamp).fromNow();
  const timesplits = timeStr.split(" ");
  const time =
    timeStr === "a few seconds ago"
      ? "0m"
      : (["a", "an"].includes(timesplits[0]) ? "1" : timesplits[0]) +
        timesplits[1].substring(0, 1);

  const likeOnClick = () => {
    likeCommentDB(id, loginUser);
    likeCommentRD(id, loginUser);
  };
  return (
    <div className="LandscapeComment">
      <div>
        <img
          alt="Profile"
          className="LandscapeComment__Image"
          src={process.env.PUBLIC_URL + profileImage}
        />
      </div>
      <div className="LandscapeComment__Main">
        <div className="LandscapeComment__Content">
          <div className="LandscapeComment__Text">
            <div>
              <span className="bold">{username} </span>
              {text}
            </div>
            <div className="LandscapeComment__Status">
              <span className="marginRight"> {time} </span>
              {!isDes && (
                <span>
                  {liked.length > 0 && (
                    <span className="bold marginRight">
                      {liked.length} {liked.length > 1 ? "likes" : "like"}
                    </span>
                  )}
                  <span
                    className="bold marginRight LandscapeComment__StatusReply"
                    onClick={() => {
                      replyCommentRD(replyId, username);
                    }}
                  >
                    Reply
                  </span>
                </span>
              )}
            </div>
          </div>
          {!isDes && (
            <div onClick={likeOnClick}>
              {liked.includes(username) ? (
                <IoIosHeart className="LandscapeComment__LikeIcon" />
              ) : (
                <IoIosHeartEmpty className="LandscapeComment__LikeIcon" />
              )}
            </div>
          )}
        </div>
        {subComments.length > 0 && (
          <div className="LandscapeComment__Subcomments">
            <div
              className="LandscapeComment__SubcommentButton"
              onClick={() => setIsHidden(!isHidden)}
            >
              <span> —— </span>
              <span className="bold">
                {isHidden
                  ? `View replies (${subComments.length})`
                  : "Hide replies"}
              </span>
            </div>
            {!isHidden && (
              <div>
                {subComments.map((comment) => (
                  <LandscapeComment
                    key={comment.id}
                    {...comment}
                    replyId={replyId}
                    likeCommentRD={likeCommentRD}
                    replyCommentRD={replyCommentRD}
                    loginUser={loginUser}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { loginUser } = state;
  return {
    loginUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    likeCommentRD: (commentId, username) => {
      dispatch(likeComment(commentId, username));
    },
    replyCommentRD: (commentId, toUsername) => {
      dispatch(replyComment(commentId, toUsername));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandscapeComment);
