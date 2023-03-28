import React from "react";
import Comment from "../Comment";

const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((ele) => (
        <Comment comment={ele} />
      ))}
    </div>
  );
};

export default Comments;
