import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  //화살표 함수가 아닌 일반 함수로 작성할 경우 필요함.
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState({
      number: this.state.number+1
    })
  }
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;