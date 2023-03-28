import React from "react";

const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((ele) => (
        <div className="comment">{ele}</div>
      ))}
    </div>
  );
};

export default Comments;
