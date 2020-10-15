import React, { useState } from "react";
import { createComment } from "../localStorage";
import "./CommentBox.css";

function CommentBox() {
  const [text, setText] = useState("");
  return (
    <div className="CommentBox">
      <input
        className="CommentBox__Input"
        value={text}
        placeholder={"Add a comment..."}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>

      <span
        className="bold CommentBox__Button"
        onClick={() => {
          createComment({ text });
        }}
      >
        Post
      </span>
    </div>
  );
}

export default CommentBox;
