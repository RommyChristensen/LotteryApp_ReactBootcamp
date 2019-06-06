import React from "react";
import ReactDOM from "react-dom";
import Lottery from "./Lottery";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Lottery</h1>
        <Lottery />
        <Lottery maxNum={10} numBalls={4} name="Daily Lotto" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
