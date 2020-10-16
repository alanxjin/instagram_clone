import React from "react";
import "./PortraitDesContent.css";
import MoreText from "./MoreText";
import { connect } from "react-redux";

function PortraitDesContent({
  comments,
  commentCnt,
  postUsername,
  postDescription,
}) {
  return (
    <div className="PortraitDesContent">
      <MoreText user={postUsername} text={postDescription} limit={15} />

      {commentCnt > 0 && (
        <div className="PortraitDesContent__ViewMore bold">
          <span>View all {commentCnt} comments </span>
        </div>
      )}
      {comments.map((comment) => (
        <MoreText
          key={comment.id}
          user={comment.username}
          text={comment.text}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const { comments, post } = state;
  const commentCnt = comments.length;

  const newComments = [...comments];
  newComments.sort(
    (comment1, comment2) => comment2.timestamp - comment1.timestamp
  );

  return {
    comments: newComments.slice(0, 2),
    commentCnt,
    postUsername: post.username,
    postDescription: post.description,
  };
}

export default connect(mapStateToProps)(PortraitDesContent);
