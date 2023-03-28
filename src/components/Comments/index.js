import React from "react";

const Comments = ({ comments }) => {
  return comments.map((ele) => <div>{ele}</div>);
};

export default Comments;
