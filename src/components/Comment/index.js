import React from "react";

const comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <span className="user-name">Dummy name</span>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default comment;
