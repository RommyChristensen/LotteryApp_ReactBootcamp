import React from "react";
import ReactDom from "react-dom";

class LotteryBall extends React.Component {
  render() {
    return <div>{this.props.num}</div>;
  }
}

export default LotteryBall;
