import React, { useState } from "react";
import "./MoreText.css";

function MoreText({ user, comment, limit = 10 }) {
  const [hidden, setHidden] = useState(comment.split(" ").length > limit);
  return (
    <div className="MoreText">
      <span className="bold">{user} </span>
      <span className="MoreText__Main">
        {hidden
          ? comment.split(" ").slice(0, limit).join(" ") + "... "
          : comment}
        ⁣
      </span>
      {hidden && (
        <span className="MoreText__More bold" onClick={() => setHidden(false)}>
          more
        </span>
      )}
    </div>
  );
}

export default MoreText;
