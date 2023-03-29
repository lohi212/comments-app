import React from "react";
import Comment from "../Comment";

const Comments = ({ comments, setComments, pID }) => {
  const filteredComments = comments.filter((i) => i.parentId === pID);

  return (
    <div className="comments-container">
      {(filteredComments || []).map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </div>
  );
};

export default Comments;
