import React, { useState } from "react";
import "./LandscapeComment.css";
import { IoIosHeartEmpty } from "react-icons/all";
import moment from "moment";

function LandscapeComment({
  profileImage,
  username,
  text,
  timestamp,
  liked = [],
  isDes = false,
  subComments = [],
}) {
  const [isHidden, setIsHidden] = useState(true);
  const time =
    moment(timestamp).fromNow().split(" ")[0] +
    moment(timestamp).fromNow().split(" ")[1].substring(0, 1);
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
                  <span className="bold marginRight">{liked.length} likes</span>
                  <span className="bold marginRight"> Reply </span>
                </span>
              )}
            </div>
          </div>
          <div>
            <IoIosHeartEmpty className="LandscapeComment__LikeIcon" />
          </div>
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
                  <LandscapeComment key={comment.id} {...comment} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandscapeComment;
