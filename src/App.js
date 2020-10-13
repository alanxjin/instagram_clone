import React, { useState } from "react";
import "./App.css";
import { PortraitPage } from "./components";
import { createComment, getAllComments } from "./localStorage";

function App() {
  const [text, setText] = useState("");
  console.log(getAllComments());
  return (
    <div className="App">
      <PortraitPage />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          createComment({ text });
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
