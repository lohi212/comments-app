import React, { useState } from "react";
import Comments from "../Comments";
import InputContainer from "../InputContainer";

const Comment = ({ comment, comments, setComments }) => {
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  const { id, text } = comment;

  return (
    <div className="comment-container">
      <span className="user-name">Dummy name</span>
      <div className="comment">{text}</div>
      {isReplyClicked ? (
        <div className="comment-container">
          <InputContainer
            comments={comments}
            setComments={setComments}
            pID={id}
            setIsReplyClicked={setIsReplyClicked}
          />
        </div>
      ) : (
        <span
          className="user-name cursor"
          onClick={() => setIsReplyClicked(true)}
        >
          ⤷Reply
        </span>
      )}

      <Comments pID={id} comments={comments} setComments={setComments} />
    </div>
  );
};

export default Comment;
