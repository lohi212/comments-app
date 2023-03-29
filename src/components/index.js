import React, { useState } from "react";
import Comments from "./Comments";
import InputContainer from "./InputContainer";
import { v4 as uuidv4 } from "uuid";

const CommentsContainer = ({}) => {
  const [comments, setComments] = useState([]);

  return (
    <div className="root-container">
      <InputContainer
        pID="root"
        setComments={setComments}
        comments={comments}
      />
      <Comments comments={comments} setComments={setComments} pID="root" />
    </div>
  );
};

export default CommentsContainer;
