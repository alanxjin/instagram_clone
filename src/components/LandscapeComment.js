import React, { useState } from "react";
import "./LandscapeComment.css";
import { IoIosHeartEmpty } from "react-icons/all";

function LandscapeComment({ isDes = false, subComments = [] }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="LandscapeComment">
      <div>
        <img
          alt="Profile"
          className="LandscapeComment__Image"
          src={
            process.env.PUBLIC_URL +
            "/imgs/" +
            (isDes ? "postProfile.jpg" : "userProfile.jpg")
          }
        />
      </div>
      <div className="LandscapeComment__Main">
        <div className="LandscapeComment__Content">
          <div className="LandscapeComment__Text">
            <div>
              <span className="bold">{isDes ? "alanxjin " : "alice "}</span>
              Artist Preta Wolzak’s (@pretawolzak) textured mixed-media pieces
              focus on hard issues, including gender equality, representation
              and race. Her collections “Ma Petit Inuite” and “Arctic Charade”
              (pictured) confronts the impact of humans’ behavior on our planet
              and the effects of climate change.
            </div>
            <div className="LandscapeComment__Status">
              <span> 2w </span>
              {!isDes && (
                <span>
                  <span className="bold"> 1 likes </span>
                  <span className="bold"> Reply </span>
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
                {isHidden ? "View replies (1)" : "Hide replies"}
              </span>
            </div>
            {!isHidden && (
              <div>
                {subComments.map((commentInfo) => (
                  <LandscapeComment key={commentInfo["commentId"]} />
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
