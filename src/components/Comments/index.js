import React from "react";
import Comment from "../Comment";

const Comments = ({ comments, setComments }) => {
  return (
    <div className="comments-container">
      {Object.keys(comments || {}).map((ele) => (
        <Comment comment={ele} comments={comments} setComments={setComments} />
      ))}
    </div>
  );
};

export default Comments;
