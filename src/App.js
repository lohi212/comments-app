import logo from "./logo.svg";
import "./App.css";
import CommentsContainer from "./components";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState({});

  const handleOk = (value) => {
    setComments({ [value]: 0, ...comments });
  };

  return (
    <div className="App">
      <CommentsContainer
        handleOk={handleOk}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
}

export default App;
