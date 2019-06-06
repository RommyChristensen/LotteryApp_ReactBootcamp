import React from "react";
import ReactDom from "react-dom";
import "./LotteryBall.css";

class LotteryBall extends React.Component {
  render() {
    return <div className="LotteryBall">{this.props.num}</div>;
  }
}

export default LotteryBall;
