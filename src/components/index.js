import React, { useState } from "react";
import Comments from "./Comments";
import InputContainer from "./InputContainer";

const CommentsContainer = ({ handleOk, comments, setComments }) => {
  return (
    <div className="root-container">
      <InputContainer handleOk={handleOk} />
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
};

export default CommentsContainer;
