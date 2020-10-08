import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Super puper React App (React.Component)" />
        <Subtitle title="Component without React lifecycle methods (Rreact.PureComponent)" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button title="test button (Functionl component)" />
      </header>
    </div>
  );
}

export default App;
