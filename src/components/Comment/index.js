import React, { useState } from "react";
import CommentsContainer from "..";
import Comments from "../Comments";
import InputContainer from "../InputContainer";

const Comment = ({ comment, comments, setComments }) => {
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  const handleReplyAdded = (value) => {
    const newComments = { ...comments };
    newComments[comment] = {
      [value]: 0,
      ...comments[comment],
    };
    setComments(newComments);
    setIsReplyClicked(false);
  };

  return (
    <div className="comment-container">
      <span className="user-name">Dummy name</span>
      <div className="comment">{comment}</div>
      {isReplyClicked ? (
        <InputContainer handleOk={handleReplyAdded} />
      ) : (
        <span
          className="user-name cursor"
          onClick={() => setIsReplyClicked(true)}
        >
          ⤷Reply
        </span>
      )}

      <Comments comments={comments[comment]} setComments={setComments} />
    </div>
  );
};

export default Comment;
