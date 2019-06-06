import React from "react";
import ReactDOM from "react-dom";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends React.Component {
  static defaultProps = {
    numBalls: 6,
    maxNum: 40,
    name: "Lottery"
  };

  constructor(props) {
    super(props);

    this.state = {
      balls: []
    };

    for (let i = 0; i < this.props.numBalls; i++) {
      this.state.balls.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }

    this.generateBalls = this.generateBalls.bind(this);
  }

  generateBalls() {
    let newBalls = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      newBalls.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }
    this.setState({ balls: newBalls });
  }

  render() {
    console.log(this.state);
    return (
      <div className="Lottery">
        <h2>{this.props.name}</h2>
        <div className="Lottery-Balls">
          {this.state.balls.map(ba => (
            <LotteryBall num={ba} />
          ))}
        </div>
        <button onClick={this.generateBalls}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
