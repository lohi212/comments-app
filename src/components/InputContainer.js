import React, { useState } from "react";

const sendCommentImg = require("../images/comment.png");

const InputContainer = ({ handleOk }) => {
  const [value, setValue] = useState("");

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
            handleOk(value);
            setValue("");
          }
        }}
      />
      <button
        onClick={() => {
          handleOk(value);
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
