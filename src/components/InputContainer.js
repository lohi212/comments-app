import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const sendCommentImg = require("../images/comment.png");

const InputContainer = ({ pID, comments, setComments, setIsReplyClicked }) => {
  const [value, setValue] = useState("");

  const handleOk = () => {
    setComments([
      ...comments,
      { text: value, parentId: pID || "root", id: uuidv4() },
    ]);
    if (setIsReplyClicked) setIsReplyClicked(false);
  };

  return (
    <div className="input-wrapper">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="input-container"
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOk();
            setValue("");
          }
        }}
      />
      <button
        onClick={() => {
          handleOk();
          setValue("");
        }}
        className="button-container"
      >
        <img src={sendCommentImg} width="25px" />
      </button>
    </div>
  );
};

export default InputContainer;
