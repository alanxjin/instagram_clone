import React, { useEffect, useState } from "react";
import { createComment as createCommentDB } from "../localStorage";
import "./CommentBox.css";
import { connect } from "react-redux";
import { createComment, replyComment } from "../actions";

function CommentBox({
  addNewComment,
  resetReply,
  loginUser,
  toCommentId = 0,
  toUsername = "",
}) {
  const [text, setText] = useState("");
  const commentInfo = {
    isDirect: toUsername === "",
    username: loginUser,
    profileImage: "/imgs/userProfile.jpg",
    text: text,
  };

  useEffect(() => {
    setText(toUsername !== "" ? `@${toUsername} ` : "");
  }, [toUsername]);

  const updateComment = () => {
    addNewComment(createCommentDB(commentInfo, toCommentId), toCommentId);
    setText("");
    resetReply();
  };
  return (
    <div className="CommentBox">
      <input
        className="CommentBox__Input"
        value={text}
        placeholder={"Add a comment..."}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            updateComment();
          }
        }}
      ></input>

      <span className="bold CommentBox__Button" onClick={updateComment}>
        Post
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  const { loginUser, reply } = state;
  return {
    loginUser,
    toCommentId: reply.commentId,
    toUsername: reply.toUsername,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewComment: (comment, toCommentId) => {
      dispatch(createComment(comment, toCommentId));
    },
    resetReply: () => {
      dispatch(replyComment(0, ""));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
