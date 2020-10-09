import React from "react";
import ReactDOM from "react-dom";

const Note = React.createElement(
  "h6",
  { className: "note" },
  "hello React App (Rreact.CreateElement)"
);

const rootElement = document.getElementById("root");
ReactDOM.render(Note, rootElement);

export default Note;
