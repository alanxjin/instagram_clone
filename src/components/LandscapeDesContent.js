import React from "react";
import LandscapeComment from "./LandscapeComment";
import "./LandscapeDesContent.css";
import { connect } from "react-redux";

function LandscapeDesContent({ post, directComments, subComments }) {
  return (
    <div className="LandscapeDesContent">
      <LandscapeComment
        profileImage={post.profileImage}
        username={post.username}
        text={post.description}
        timestamp={post.timestamp}
        isDes={true}
      />
      {directComments.map((comment, ind) => (
        <LandscapeComment
          key={comment.id}
          {...comment}
          subComments={subComments[ind]}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const { comments, post } = state;
  comments.sort(
    (comment1, comment2) =>
      comment2.liked.length - comment1.liked.length ||
      comment2.timestamp - comment1.timestamp
  );

  const directComments = comments.filter((comment) => comment.isDirect);
  const subComments = directComments.map((comment) =>
    comment.replied.map((id) =>
      comments.find((checkComment) => checkComment.id === id)
    )
  );

  return {
    directComments,
    subComments,
    post,
  };
}

export default connect(mapStateToProps)(LandscapeDesContent);
